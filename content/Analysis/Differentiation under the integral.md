Let $U\subseteq \mathbb{R}$ be open and suppose that $f:U\times E\to \mathbb{R}$ satisfies:
1. $x\to f(t,x)$ is [[Analysis/Integral\|integrable]] for all $t\in U$
2. $t\to f(t,x)$ is differentiable for all $x$
3. for some [[Analysis/Integral\|integrable]] $g$ and for all $x\in E$, $t\in U$
   $$
\left\lvert  \frac{\partial f}{\partial t}(t,x)  \right\rvert \leq g(x)
$$
Then the function $x\to(\partial f/ \partial t)(t,x)$ is [[Analysis/Integral\|integrable]] for all $t$. 
Moreover, the function $F:U\to \mathbb{R}$ defined by:
$$
F(t)=\int_{E} f(t,x) \mu(dx)
$$
is differentiable and
$$
\frac{d}{dt} F(t)=\int_{E} \frac{\partial f}{\partial t}(t,x)\mu(dx)
$$
