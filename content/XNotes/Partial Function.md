Write $f:X\dashrightarrow Y$ for partial functions from $X$ to $Y$. This means that not all inputs in $X$ have an output in $Y$. We write $dom(f)$ for the set of values which does have an output in $Y$.
We also write:
$$
\begin{align}
f(x)\downarrow \quad %quad
\quad %quad
 & \text{iff } x\in dom(f)  \\
f(x)\uparrow \quad %quad
\quad %quad
 & \text{otherwise}
\end{align}
$$
and use terminology that $f$ converges or diverges on input $x$.

Given a [[XNotes/Register Machine]] $M$ and $k>0$, we can define a [[XNotes/Partial Function]] $f_{M,k}:\mathbb{B}^{k}\dashrightarrow \mathbb{B}$ by:
1. $f_{M,k}(\vec{w})\uparrow$ iff $M$ does not halt on $\vec{w}$
2. $f_{M,k}(\vec{w})=v_{0}$ iff $M$ halts on $\vec{w}$ with register content $\vec{v}$
Note that $f_{M,k}$ is necessarily [[Foundations/Computable]].
