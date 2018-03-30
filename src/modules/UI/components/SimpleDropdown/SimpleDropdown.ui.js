// @flow

import React, { Component } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import styles from './style.js'
import * as Animatable from 'react-native-animatable'

export type Props = {
  height?: number,
  children: any,
  onPress: Function,
  containerStyle: Object
}

export type State = {

}

export default class WalletListProgressDropdown extends Component<Props> {
  render () {
    return (
      <Animatable.View animation={'fadeIn'} duration={6000} /* slideInDown */ style={[styles.container, this.props.containerStyle, {height: this.props.height}]}>
        <TouchableWithoutFeedback onPress={this.props.onPress}>
          {this.props.children}
        </TouchableWithoutFeedback>
      </Animatable.View>
    )
  }
}