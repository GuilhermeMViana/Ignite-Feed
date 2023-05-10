import { ImgHTMLAttributes } from 'react'

import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{
    hasBorder?: Boolean;
}

export function Avatar({hasBorder = true, ...props }: AvatarProps) {

    return (
        <img className={
            hasBorder ? styles.avatarBorder : styles.avatar} 
            {...props}
        />
    )
}