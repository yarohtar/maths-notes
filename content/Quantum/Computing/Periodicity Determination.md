### Input
Black box for a function $f:\mathbb{Z}_{N}\to \mathbb{Z}_{M}$
$f$ is periodic with a period $r$ 
### Output
Return $r$ with some desired accuracy independent of $N$ 

### Algorithm
Construct
$$
\ket{\psi_{N}} =\frac{1}{\sqrt{ N }}\sum_{x\in \mathbb{Z}_{N}}\ket{x} 
$$
Consider a state $\ket{\psi_{N}}.\ket{0}$ (where $\ket{0}\in \mathcal{H}_{M}$)
Apply the quantum oracle of the function $f$ 
$$
\begin{align}
U_{f}\ket{\psi_{N}} \ket{0}  & =\frac{1}{\sqrt{ N }}\sum_{x\in \mathbb{Z}_{N}}U_{f}\ket{x} \ket{0}  \\
 & =\frac{1}{\sqrt{ N }}\sum \ket{x} \ket{0+f(x)}  \\
 & =\frac{1}{\sqrt{ N }}\sum_{x\in \mathbb{Z}_{N}}\ket{x} \ket{f(x)} 
\end{align}
$$
Since $r$ is the period of $f$:
$r\mid N$ and let $A=\frac{N}{r}$ be the number of periods

Do a measurement on the second register of basis $\mathcal{B}_{M}=\{ \ket{0,\dots,\ket{M-1}} \}$
Let outcome be $y=f(x_{0})$
$x_{0}\in \{ 0,1,\dots,r-1 \}$ is the smallest value of $x$ for which $f(x)=y$

Probability of outcome $y=f(x_{0})$ is $p(y)$
Terms contributing to this outcome are
$$
\frac{1}{\sqrt{ N }}\sum_{j=0}^{A-1}\ket{x_{0}+jr}\ket{y}
$$
By the extended [[Quantum/Born Rule]]
$$
p(y)=\left\lVert  \frac{1}{\sqrt{ N }}\sum_{j=0}^{A-1}\ket{x_{0}+jr}   \right\rVert ^{2} =\frac{A}{N}=\frac{1}{r}
$$
So the measurement gives a uniformly random outcome
Post measurement state of the first register is 
$$
\ket{per} =\frac{1}{\sqrt{ A }}\sum_{j=0}^{A-1} {\ket{x_{0}+jr} }
$$
We apply [[Quantum/Computing/Quantum Fourier Transform]]
$$
\begin{align}
QFT\ket{per} &  =\frac{1}{\sqrt{ A }}\sum_{j=0}^{A-1}QFT\ket{x_{0}+jr}  \\
 & =\frac{1}{\sqrt{ NA }}\sum_{j=0}^{A-1} \sum_{y=0}^{N-1} \omega^{y(x_{0}+jr)} \ket{y}  \\
 & =\frac{1}{\sqrt{ NA }}\sum_{y=0}^{N-1} \omega^{x_{0}y}\left( \sum_{j=0}^{A-1} (\omega^{ry})^{j}\ket{y}  \right) \\
\end{align}
$$
We can calculate
$$
\begin{align}
S=\sum_{j=0}^{A-1}(\omega^{ry})^{j}=\begin{cases}
A & \text{if } y=kA, 0\leq k\leq r-1 \\
0 & \text{else}
\end{cases}
\end{align}
$$
Thus
$$
QFT\ket{per} = \frac{1}{\sqrt{ r }}\sum_{k=0}^{r-1} \omega^{x_{0}kA}\ket{kA} =\ket{\psi} 
$$
Measurement on the first register in $\mathcal{B}_{N}$ 
Say outcome is $c=k_{0}A=k_{0} \frac{N}{r}$  for some $k_{0}\in \{ 0,\dots,r-1 \}$
$$
P(c=k_{0}A)=\frac{1}{r}
$$
We try $A=gcd(c,N)$ in the hope that $k_{0}$ is coprime to $N$. If that is the period, we are done, otherwise, repeat. 

[[Algebra/Number Theory/Coprimality Theorem]]
So repeat this $\log \log r$ times to find at least one coprime.