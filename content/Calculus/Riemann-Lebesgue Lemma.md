$$
F(x)=\int_{a}^{b}e^{ixt}f(t)dt\to 0
$$
as $x\to \infty$ if $\int_{a}^{b}\lvert f \rvert dt<\infty$ and $-\infty\leq a<b\leq \infty$

#### Proof
nahhhh



### How quickly does this happen?
Integrating by parts:
$$
F(x)=\left[ f(t) \frac{e^{ixt}}{ix} \right]_{a}^{b}- \frac{1}{ix}\int_{a}^{b}f'(t)e^{ixt}dt
$$
Now assuming that $f(a)\neq 0$ or $f(b)\neq 0$ we find,
by the previous lemma on the integral term, that:
$$
F(x)\sim \frac{1}{ix}[f(t)e^{ixt}]_{a}^{b}=O\left( \frac{1}{x} \right)
$$
What if $f$ is 0 at both ends or the integration range is $-\infty$ to $\infty$

In this case, $F$ is small in all orders in $x^{-k}$ as $x\to \infty$
In particular if 
$$
F=\int_{-\infty}^{\infty }f(t)e^{ixt}dt
$$
requiring $f\to 0$ as $\lvert t \rvert\to \infty$ we have:
$$
F(x)=O(x^{-N})
$$
for all $N\in \mathbb{N}$ as long as $f$ is infinitely differentiable.
