import React from 'react';
import { Animated, View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class TreeView extends React.PureComponent {
  propTypes: {
    arrowIcon: PropTypes.node,
    arrowStyle: PropTypes.object,
    childrenStyle: PropTypes.object,
    collapsed: PropTypes.bool,
    defaultCollapsed: PropTypes.bool,
    itemStyle: PropTypes.object,
    nodeLabel: PropTypes.node.isRequired,
    treeViewStyle: PropTypes.object,
  }

  constructor(props) {
    super(props);

    const collapsed = props.defaultCollapsed;
    this.state = {
      collapsed,
      rotateAnimation: new Animated.Value(!collapsed ? 0 : 90),
    };
    this.handleClick = this.handleClick.bind(this);
    this.rotateArrow = this.rotateArrow.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.collapsed !== this.state.collapsed) this.rotateArrow();
  }

  handleClick(...args) {
    this.rotateArrow();
    if (this.props.onClick) {
      this.props.onClick(...args);
    }
  }

  rotateArrow() {
    const { collapsed, rotateAnimation } = this.state;
    Animated.timing(rotateAnimation, {
      toValue: !collapsed ? 90 : 0,
      duration: 250,
    }).start();
    this.setState({
      collapsed: !collapsed,
    });
  }

  render() {
    const {
      collapsed = this.state.collapsed,
      arrowIcon = <Text>▾</Text>,
      arrowStyle,
      itemStyle,
      treeViewStyle,
      childrenStyle,
      nodeLabel,
      children,
      defaultCollapsed,
      ...rest
    } = this.props;
    const { rotateAnimation } = this.state;

    const rotate = rotateAnimation.interpolate({
      inputRange: [0, 90],
      outputRange: ['0deg', '-90deg'],
    });

    const arrow = (
      <TouchableOpacity onPress={this.handleClick}>
        <Animated.View
          {...rest}
          style={[{ marginRight: 6, transform: [{ rotate }] }, arrowStyle]}
        >
          {arrowIcon}
        </Animated.View>
      </TouchableOpacity>
    );

    return (
      <View style={[{ overflow: 'hidden' }, treeViewStyle]}>
        <View
          style={[{ flexDirection: 'row', alignItems: 'center' }, itemStyle]}
        >
          {arrow}
          {nodeLabel}
        </View>
        <View
          style={[
            collapsed ? { height: 0 } : { marginLeft: 16 },
            childrenStyle,
          ]}
        >
          {collapsed ? null : children}
        </View>
      </View>
    );
  }
}

export default TreeView;
