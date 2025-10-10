A generator polynomial $g(X)$ for a [[Notes/Cyclic Code]] $C$ is a polynomial $g(X)\mid X^{n}-1$ such that
$$
\mathcal{C}=\{ f(X)g(X) \mid f(X)\in \mathbb{F}_{2}[X] \}
$$
### Theorem
Every [[Notes/Cyclic Code]] has a unique generator polynomial.
#### Proof
Take the polynomial of the smallest degree. Use division algorithm.
### Proposition
If [[Notes/Cyclic Code\|cyclic codes]] $C_{1}$ and $C_{2}$ have generator polynomials $g_{1}$ and $g_{2}$ 
then $C_{1}\supseteq C_{2}\iff g_{1}\mid g_{2}$.
### Lemma
Let $C$ be a [[Notes/Cyclic Code]] of length $n$ with generator polynomial
$g(X)=a_{0}+a_{1}X+\dots+a_{k}X^{k}$ (where $a_{k}\neq 0$)
Then $g(X),Xg(X),\dots,X^{n-k-1}g(X)$ is a basis for $C$ 
In particular, $\operatorname{rank}C=n-k$.
### Corollary
Let $C$ be a [[Notes/Cyclic Code]] with generator polynomial
$$
g(X)=a_{0}+a_{1}X+\dots+a_{k}X^{k}
$$
The [[Notes/Generator Matrix]] of $C$ is:
$$
\begin{pmatrix}
a_{0} & a_{1} & \dots & a_{k} & 0 & 0 & \dots & 0 \\
0 & a_{0} & a_{1} & \dots & a_{k} & 0 & \dots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots & \vdots & \vdots & \vdots  \\
0 & 0 & 0 & \dots & 0 & a_{0} & \dots  & a_{k}
\end{pmatrix}
$$
