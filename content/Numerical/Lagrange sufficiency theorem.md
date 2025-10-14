Given a function $f:X\to \mathbb{R}$ and a constrained problem:
" Minimize $f(x)$ s.t. $g(x)=b$ and $x\in X$ "
Define [[Numerical/Lagrangian\|Lagrangian]]:
$$L(x,\lambda)= f(x)-\lambda^T(g(x)-b)$$
Also define $X_{b}=\{ x\in X : g(x)=b\}$
If there is a point $(x^*, \lambda^*)$ s.t. $x^{*}\in X_{b}$ (is feasible) and:
$$
L(x^{*},\lambda ^{*})=\inf_{x\in X}L(x,\lambda ^{*})
$$
then $x^*$ is the solution to the original problem.

### Proof 
Just calculate:
$$
\begin{align}
\inf_{x\in X_{b}} f(x) &= \inf_{x\in X_{b}}( f(x) - \lambda^{*T} (g(x)-b)) \\
&\geq \inf_{x\in X} (f(x) - \lambda^{*T}(g(x)-b))\\
&=\inf_{x\in X} L(x,\lambda^*) \\
&=L(x^*,\lambda ^{*})\\
&=f(x^*)
\end{align}
$$
Thus $x^{*}$ is optimal.
