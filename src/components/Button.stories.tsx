import { Button, ButtonProps } from "./Button";
import { StoryObj, Meta } from "@storybook/react";

export default {
    title: "Components/Button",
    component: Button,
    args: {
        children: 'Create account'
    },
    argTypes: {
    },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {
    
}

export const Small: StoryObj<ButtonProps> = {
    args: {
        size: "sm",
    },
}

export const Large: StoryObj<ButtonProps> = {
    args: {
        size: "lg",
    },
}

export const CustomComponent: StoryObj<ButtonProps> = {
    args: {
        asChild: true,
        children: (
            <p>Testando</p>
        )
    },
    argTypes: {
        children: {
            table: {
                disabled: true,
            }
        },
        asChild: {
            table: {
                disabled: true,
            }
        }
    },
}
