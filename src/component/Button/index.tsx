import React from 'react'
import { useLocale, useThemePrefix } from '../../hooks'
import buttonStyle from './index.less'

interface IBaseButton extends GingKooComponent {
  /**
   * @description
   * common: 普通按钮 白底蓝字
   * @description
   * search：查询按钮 蓝底白字
   * @description
   * submit：提交按钮
   * @description
   * link: 链接
   */
  type?: 'common' | 'search' | 'submit',
  loading?: boolean
  disabled?: boolean,
  onClick?: () => void
  children: React.ReactNode
}

interface ILinkButton extends GingKooComponent {
  type?: 'link',
  target?: '_blank' | '_self' | string,
  href?: string,
  disabled?: boolean,
  onClick?: () => void
  children: React.ReactNode
}

/**
 * @param param0 按钮
 */
const Button: React.FC<ILinkButton | IBaseButton> = (props) => {
  const {
    type = 'common',
    children,
    style = {},
    loading = false,
    disabled = false,
    onClick = () => {} 
  } = props as IBaseButton
  const { href, target } = props as ILinkButton
  const currentStyle = useThemePrefix(buttonStyle)
  const locale = useLocale()
  let className = `${currentStyle.button} ${currentStyle[`${type}-button`]}`
  if (disabled) {
    className = `${className} ${currentStyle['disabled-button']} ${currentStyle['disabled-hover']}`
  }
  if (loading) {
    className = `${className} ${currentStyle['loading-button']} ${currentStyle['disabled-hover']}`
  }
  if ((props as ILinkButton).type === 'link') {
    className = `${currentStyle['link-button']}`
  }
  const clickButton = () => {
    if (href) {
      if (target === '_self' || !target) {
        window.location.href = href
      }
      if (target === '_blank') {
        window.open(href)
      }
    }
    if (!loading) {
      onClick()
    }
  }

  return (
    <button
      className={className}
      disabled={disabled}
      style={style}
      onClick={ clickButton }>
      {children}
      { locale.Button }
    </button>
  )
}

export default Button
