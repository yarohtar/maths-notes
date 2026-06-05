Let $L$ be the [[Foundations/Constructible Hierarchy]].
There is a sentence $\sigma$ such that $L\models \sigma$
and for all [[Foundations/Transitive Model]]s $X$ of $\sigma$ (i.e. $X\models \sigma$)
there is some $\alpha \in \mathrm{Or d}$ such that $X=L_{\alpha}$.
### Proof
Take the [[Foundations/Sufficiently Strong]] $T\subseteq ZFC$ finite and write 
$$
\sigma= T \land (V=L) \land \text{there is no largest ordinal}
$$
(where $V=L$ is [[Foundations/Axiom of Constructability]])
If $X$ is [[Foundations/Transitive Model\|Transitive]] then $X\cap \mathrm{Or d}=\lambda$ for some $\lambda$.
So if $X\models \sigma$ then $\lambda$ is a limit ordinal.
By [[Foundations/Axiom of Constructability]] 
$$
X=\bigcup_{\alpha<\lambda} L_{\alpha} = L_{\lambda}
$$
since $\lambda$ is a limit.
