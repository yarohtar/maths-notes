Let $n$ be odd.
Let $K$ be a field extension of $\mathbb{F}_{2}$ containing all $n^{th}$ roots 
of unity $\{ 1, \alpha, \alpha^{2},\dots,\alpha^{n-1} \}$ (e.g. $K=\mathbb{F}_{2^{r}}$ for $2^{r}=1\pmod{n}$)
A BCH code with design distance $\delta$
is a [[Information Theory/Cyclic Code with Defining Set]] $A=\{ \alpha,\alpha^{2},\dots,\alpha^{\delta-1} \}$
### Lemma
The generator $g(X)$ for BCH code $C$ is 
$$
\operatorname{lcm} \{ m_{1}(X), \dots, m_{\delta-1}(X) \}
$$
where $m_{i}(X)$ is the minimal polynomial for $\alpha^{i}$ over $\mathbb{F}_{2}$
### Theorem
The [[Information Theory/Minimum distance of a code]] for BCH code is at least the design distance $\delta$.
#### Proof
Consider the matrix:
$$
H=\begin{pmatrix}
1 & \alpha & \alpha^{2} & \dots & \alpha^{n-1} \\
1 & \alpha^{2} & \alpha^{4} & \dots & \alpha^{2(n-1)} \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
1 & \alpha^{\delta-1} & \alpha^{2(\delta-1)} & \dots & \alpha^{(\delta-1)(n-1)}
\end{pmatrix}
$$
Taking any $\delta-1$ columns, gives a [[Algebra/Vector Spaces/Vandermonde matrix]], 
so any $\delta-1$ columns of $H$ are linearly independent.
But a codeword in $C$ is a dependence relation 
between the columns of $H$ so $w(C)\geq\delta$

Note that $H$ is not the [[Information Theory/Parity Check Matrix]] 
in the usual sense, because $\alpha \not\in \mathbb{F}_{2}$
# Decoding
Suppose we receive $r=c\oplus e$ where $e$ is the error pattern
### Definition
The error locator polynomial of an error pattern $e\in \mathbb{F}_{2}^{n}$ is
$$
\sigma(X)=\prod_{i\in \mathcal{E}}(1-\alpha^{i}X)\in K[X]
$$
where $\mathcal{E}=\{ i: e_{i}=1 \}$.
### Theorem
Suppose $\operatorname{deg}\sigma=\lvert \mathcal{E} \rvert\leq t$ where $2t+1\leq\delta$.
$\sigma(X)$ has constant term $1$ and satisfies:
$$
\sigma(X)\sum_{j=1}^{2t} r(\alpha^{j})X^{j}=w(X) \pmod{X^{2t+1}}
$$
where $w(X)$ is a polynomial of degree $\leq t$.
Moreover, $\sigma(X)$ is the unique polynomial of least degree 
satisfying the above.
#### Proof
Let
$$
w(X)=-X\sigma'(X)=\sum_{i\in \mathcal{E}}\alpha^{i}X\prod_{j\in \mathcal{E}\setminus \{ i \}}(1-\alpha^{j}X)
$$
So $w(X)$ is a polynomial of degree equal to $\operatorname{deg}\sigma$
We work in $K[[X]]$ the ring of formal power series.
Note:
$$
\frac{1}{1-\alpha^{i}X}=\sum_{n=0}^{\infty}(\alpha^{i}X)^{n}\in K[[X]]
$$
So:
$$
\begin{align}
\frac{w(X)}{\sigma(X)} &= \sum_{i\in \mathcal{E}} \frac{\alpha^{i}X}{1-\alpha^{i}X}  \\
 &= \sum_{i\in \mathcal{E}}\sum_{j=1}^{\infty}(\alpha^{i}X)^{j} \\
 & =\sum_{j=1}^{\infty}\sum_{i\in \mathcal{E}} (\alpha^{i}X)^{j} \\
 & =\sum_{j=1}^{\infty}X^{j}e(\alpha^{j})
\end{align}
$$
Thus we find:
$$
w(X)=\sigma(X)\sum_{j=1}^{\infty} e(\alpha^{j})X^{j}
$$
By definition, $c(\alpha^{j})=0$ for $1\leq j\leq\delta-1$
so for $1\leq j\leq 2t$. So $r(\alpha^{j})=e(\alpha^{j})$ for $1\leq j\leq 2t$
Thus
$$
\sigma(X)\sum_{j=1}^{2t}r(\alpha^{j})X^{j}=w(X)\pmod{X^{2t+1}}
$$
Also $\operatorname{deg}w(X)=\operatorname{deg}\sigma(X)\leq t$

To show uniqueness, note $\sigma(X)$ has distinct nonzero roots,
so $\sigma(X)$ and $w(X)=-X\sigma'(X)$ are coprime.
Suppose $\tilde{\sigma}$ and $\tilde{w}$ are another pair of solutions.
WLOG $\operatorname{deg}\tilde{\sigma}\leq \operatorname{deg}\sigma$
Then 
$$
\sigma(X)\tilde{w}(X) = \tilde{\sigma}(X) w(X)\pmod{X^{2t+1}}
$$
But all have degree $\leq t$ so we actually have equality.
As they don't share any roots it has to be $\sigma=\tilde{\sigma}$ (and $w=\tilde{w}$)
### Application
Taking coefficients of $X^{i}$ for $t+1\leq i\leq 2t$ 
allows us to solve for the coeffs of $\sigma(X)$.
Then 
$$
\mathcal{E}=\{ 0\leq i\leq n-1 : \sigma(\alpha^{-i})=0\}
$$
This determines $e$ and we decode as $r\oplus e$.
