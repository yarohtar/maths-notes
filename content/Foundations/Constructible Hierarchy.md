Fix set $X$, formula $\phi$, $p \in X^{<\omega}$.
Define
$$
D(\phi,p,X) = \{ z\in X : X\models \phi(p,z) \}
$$
This is the subset of $X$, defined by $\phi$, with parameters $p$.
Define further
$$
\mathcal{D}(X) = \{ D(\phi,p,X) : \phi \in \mathrm{Fml}, p \in X^{<\omega} \}
$$
Both $D$ and $\mathcal{D}$ are [[Foundations/Absolute Operation]]s for [[Foundations/Transitive Model]]s of a [[Foundations/Sufficiently Strong]] $T$.
If $X$ is [[Foundations/Set Theory/Transitive\|Transitive]] then so is $\mathcal{D}(X)$.

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
For $\alpha\leq \omega$ we have $L_{\alpha}=V_{\alpha}$ where $V$ is the [[Foundations/Von Neumann Hierarchy]].
For $\alpha>\omega$ then $L_{\alpha}\neq V_{\alpha}$.
#### Proof
First bit by $\omega$-induction.
Then $L_{\omega}=\bigcup_{\alpha<\omega}L_{\alpha}=\bigcup_{\alpha<\omega}V_{\alpha}=V_{\omega}$.
However, $L_{\omega+1}$ is countable and $V_{\omega+1}$ is not.
### Lemma
$L$ is [[Foundations/Absolute]] for [[Foundations/Transitive Model]]s of a [[Foundations/Sufficiently Strong]] $T$
i.e. there is a formula $\Gamma$ such that $\Gamma(\alpha,x)$ if and only if $x\in L_{\alpha}$.
This $\Gamma$ is [[Foundations/Absolute]].
### Corollary
If $N$ is any [[Foundations/Set Theory/Transitive\|Transitive]] set with $\alpha \in N$ and $N\models T$
where $T$ is [[Foundations/Sufficiently Strong]] for [[Foundations/Absolute]]ness of $\Gamma$
then $L_{\alpha}\in N$ so $L_{\alpha}\subseteq N$.
In particular:
$$
\bigcup_{\alpha \in N} L_{\alpha} \subseteq N
$$
If $N$ contains all [[Foundations/Ordinals/Ordinal]]s, then $L\subseteq N$.
