import React from 'react';
import styles from './Button.module.css';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    isLoading?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    leftIcon,
    rightIcon,
    className,
    disabled,
    fullWidth = false,
    ...props
}) => {
    const variantClass = styles[variant];
    const sizeClass = styles[size];
    const fullWidthClass = fullWidth ? styles.fullWidth : '';

    return (
        <button
            className={`${styles.button} ${variantClass} ${sizeClass} ${fullWidthClass} ${className || ''}`}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <Loader2 className={`${styles.icon} animate-spin`} size={18} />}
            {!isLoading && leftIcon && <span className={styles.icon}>{leftIcon}</span>}
            {children}
            {!isLoading && rightIcon && <span className={styles.iconRight}>{rightIcon}</span>}
        </button>
    );
};
