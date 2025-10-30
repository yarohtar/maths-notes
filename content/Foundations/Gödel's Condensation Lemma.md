There is a sentence $\sigma$ such that
for all [[Foundations/Transitive Model]]s $X$ such that $X\models \sigma$
then there is some $\alpha$ such that $X=L_{\alpha}$ 
where $L$ is the [[Foundations/Constructible Hierarchy]].
### Proof
Take the [[Foundations/Sufficiently Strong]] $T$ finite and write 
$$
\sigma= T \land (V=L) \land \text{there is no largest ordinal}
$$
If $X$ is [[Foundations/Transitive Model\|Transitive]] then $X\cap \mathrm{Or d}=\lambda$ for some $\lambda$.
So if $X\models \sigma$ then $\lambda$ is a limit ordinal.
By [[Foundations/Axiom of Constructibility]] 
$$
X=\bigcup_{\alpha<\lambda} L_{\alpha} = L_{\lambda}
$$
since $\lambda$ is a limit.
