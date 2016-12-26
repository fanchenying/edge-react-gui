import asyncAuto from 'async/auto'
import { Actions } from 'react-native-router-flux'

import abcctx from '../../lib/abcContext'
import { openErrorModal } from '../ErrorModal/ErrorModal.action'
import { openLoading, closeLoading } from '../Loader/Loader.action'

import { userLogin } from './Login.action'

import t from '../../lib/LocaleStrings'

export const loginWithPassword = (username, password) => {
  return dispatch => {
    setTimeout(() => {
      abcctx(context => {
        context.loginWithPassword(username, password, null, null, (error, account) => {
          dispatch(closeLoading())
          if (error) {
            dispatch(openErrorModal(error.message))
          }
          if (!error) {
            global.localStorage.setItem('lastUser', username)
            dispatch(userLogin(account))
            Actions.home()
          }
        })
      })
    }, 300)
  }
}

export const loginWithPin = (username, pin) => {
  return dispatch => {
    setTimeout(() => {
      abcctx(context => {
        try {
          context.loginWithPIN(username, pin, (error, account) => {
            dispatch(closeLoading())
            if (error) {
              dispatch(openErrorModal(error.message))
            }

            if (!error) {
              global.localStorage.setItem('lastUser', username)
              Actions.home()
            }
          })
        } catch (e) {
          console.log(e)
        }
      })
    }, 300)
  }
}
