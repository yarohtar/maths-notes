Want to find the [[Analysis/Dual Space\|dual space]] of $l_{p}$.
For each $y\in l_{q}$, have $\phi_{y}\in l_{p}^{*}$ with $\phi_{y}(x)=x\cdot y$.

### Proposition
Norm of $\phi_y$ is $\lVert y \rVert_{q}$.
#### Proof
Have $\lVert \phi_{y} \rVert\leq \lVert y \rVert_{q}$ ([[Analysis/Hölder inequality]])

Given $y\neq 0$ let $x_{n}=(y_{n})^{q/p}$ (the obvious choice, because we want it to converge in $l_{p}$)

So $|x_{n}|^p=|y_{n}|^q$ so $x\in l_{p}$ with $\lVert x \rVert_{p}=\left( \sum|y_{n}|^q \right)^{1/p}=\lVert y \rVert_{q}^{q/p}$

Have $\phi_{y}(x)=x\cdot y=\sum(y_{n})^{q/p+1}=\sum(y_{n})^q=\lVert y \rVert_{q}^q$ 
($\frac{q}{p}+1=q$ because $\frac{1}{p}+\frac{1}{q}=1$)

So $\lVert \phi_{y} \rVert\geq \frac{\lVert y \rVert_{q}^q}{\lVert y \rVert_{q}^{q/p}}=\lVert y \rVert_{q}$
Hence $\lVert \phi_{y} \rVert=\lVert y \rVert_{q}$

### Theorem
The map $\theta:l_{q}\to l_{p}^{*}$ is an isometric isomorphism (ie they are the same spaces)
#### Proof
$\theta$ linear, as $\phi_{\lambda y+\mu y'}=\lambda \phi_{y}+\mu \phi_{y'}$
$\theta$ isometry as $\lVert \phi_{y} \rVert=\lVert y \rVert_{q}$ (so $\theta$ is injective) (???)
Need $\theta$ surjective
Given $T\in l_{p}^{*}$ let $y_{n}=Tl_{n}$ each 1 
want $y\in l_{q}$ and $T=\phi_{y}$
For some fixed $N$, let:
$$
x_{n}=\begin{cases}
|y_{n}|^{q/p}sgn (y_{n}) & n\leq N \\
0 & n>N
\end{cases}
$$
Then $x \in l_{p}$ with $\lVert x \rVert_{p}=\left( \sum_{n=1}^{N}|y_{n}|^q \right)^{1/p}$
Also $Tx=\sum_{n=1}^{N}|y_{n}|^q\leq \lVert T \rVert\left( \sum_{n=1}^{N}|y_{n}|^q \right)^{1/p}$
ie $\left( \sum_{n=1}^{N}|y_{n}|^q \right)^{1-1/p}\leq \lVert T \rVert$ so $y\in l_{q}$ with $\lVert y \rVert_{q}\leq \lVert T \rVert$ as $N$ is arbitrary
Finally $\phi_{y}=T$ on $l_{n}$ for all $n$
so $\phi _y=T$ on $\braket{ l_{n} | n\in \mathbb{N} }$ (notation for linear span)
$\phi_{y}T$ is linear and continuous
ie $\phi_{y}=T$ on the whole of $l_{p}$.