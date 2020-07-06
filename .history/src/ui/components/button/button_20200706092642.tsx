import React from "react";

export type ButtonType = 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'link';
export type ButtonSize = 'large' | 'normal' | 'small';

interface baseButtonProps {
    size: ButtonSize;
    type: ButtonType;
    disabled?:boolean;
    className?:string;
    children:React.ReactNode;

}