// @flow
import * as React from 'react'
import cx from 'classnames'
import Overlay from './Overlay'
import styles from './modals.css'

type ModalProps = {
  /** handler to close the modal (attached to `Overlay` onClick) */
  onCloseClick?: (event: SyntheticEvent<>) => mixed,
  /** modal contents */
  children: React.Node,
  /** classes to apply */
  className?: string
}

/**
 * Base modal component that fills its nearest `display:relative` ancestor
 * with a dark overlay and displays `children` as its contents in a white box
 */
export default function Modal (props: ModalProps) {
  return (
    <div className={cx(styles.modal, props.className)}>
      <Overlay onClick={props.onCloseClick} />
      <div className={styles.modal_contents}>
        {props.children}
      </div>
    </div>
  )
}
