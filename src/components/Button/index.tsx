import { ButtonHTMLAttributes } from "react";
import * as S from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	loading?: boolean;
};

const Button = ({ children, loading, ...rest }: ButtonProps) => (
	<S.Wrapper {...rest}>{loading ? "loading" : children}</S.Wrapper>
);

export default Button;
