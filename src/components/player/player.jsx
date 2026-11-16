import React from 'react'
import s from './player.module.scss'

export const player = ({top = 0, left = 0}) => {
	return (
		<div className={s.player} style={{top, left}}></div>
	)
}
