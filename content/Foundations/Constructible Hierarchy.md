Let $\mathcal{D}(X)$ be [[Foundations/Constructible Sets]] from a set $X$.
Define now 
$$
\begin{gather}
L_{0} = \varnothing  \\
L_{\alpha+1} = \mathcal{D}(L_{\alpha}) \\
L_{\lambda} = \bigcup_{\alpha<\lambda} L_{\alpha} \\
L=\bigcup_{\alpha \in \mathrm{Or d}} L_{\alpha}
\end{gather}
$$
Note that $L$ is a [[Foundations/First Order Logic/Hierarchy]].
[[Foundations/Constructible Rank]]
### Lemma
$L$ is [[Foundations/Absolute]] for [[Foundations/Transitive Model]]s of a [[Foundations/Sufficiently Strong]] $T$
i.e. there is a formula $\Gamma$ such that
$$
\Gamma(\alpha,x) \iff x=L_{\alpha}
$$
This $\Gamma$ is [[Foundations/Absolute]] for [[Foundations/Transitive Model]]s of $T$.
#### Proof
The definition of $L$ is recursive.
### Corollary
Let $T$ be [[Foundations/Sufficiently Strong]] for [[Foundations/Absolute]]ness of $\Gamma$ (above).
Let $N$ be a [[Foundations/Transitive Model]] of $T$.
Then 
$$
\bigcup_{\alpha \in N\cap \mathrm{Or d}} L_{\alpha} \subseteq N
$$
#### Proof
Let $\alpha \in N\cap \mathrm{Or d}$.
Then we can show that $L_{\alpha}\in N$.
As $N$ is [[Foundations/Set Theory/Transitive\|Transitive]], we know that $L_{\alpha}\subseteq N$.
### Lemma
If $\alpha\geq \omega$ then $\lvert L_{\alpha} \rvert=\lvert \alpha \rvert$.
#### Proof
By induction on $\alpha$.
Clearly $L_{\omega}$ is countable.
Also $\alpha \subseteq L_{\alpha}$ for all $\alpha \in \mathrm{Or d}$.
Assume that $\lvert L_{\alpha} \rvert=\lvert \alpha \rvert$ and write 
$$
\lvert \alpha+1 \rvert \leq \lvert L_{\alpha+1} \rvert \leq \aleph_{0} \cdot \lvert L_{\alpha}^{<\omega} \rvert = \aleph_{0} \cdot \lvert L_{\alpha} \rvert = \aleph_{0}\cdot \lvert \alpha \rvert  =\lvert \alpha \rvert 
$$
Suppose now $\lambda$ is a limit and for $\alpha<\lambda$, $\lvert L_{\alpha} \rvert=\lvert \alpha \rvert\leq \lvert \lambda \rvert$.
Then write 
$$
\lvert \lambda \rvert  \leq \lvert L_{\lambda} \rvert  =\left\lvert  \bigcup_{\alpha<\lambda} L_{\alpha}  \right\rvert  \leq \lvert \lambda \rvert  \cdot \lvert  \lambda \rvert  =\lvert \lambda \rvert 
$$
### Lemma
For $\alpha\leq \omega$ we have $L_{\alpha}=V_{\alpha}$ where $V$ is the [[Foundations/Von Neumann Hierarchy]].
For $\alpha>\omega$ then $L_{\alpha}\neq V_{\alpha}$.
#### Proof
First bit by $\omega$-induction.
Then $L_{\omega}=\bigcup_{\alpha<\omega}L_{\alpha}=\bigcup_{\alpha<\omega}V_{\alpha}=V_{\omega}$.
However, $L_{\omega+1}$ is countable and $V_{\omega+1}$ is not.
