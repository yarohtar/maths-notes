Let $F:\mathcal{C}\to \mathcal{D}$ be a [[Foundations/Category Theory/Functor]]
Then $F$ is essentially injective if it is injective on [[Foundations/Category Theory/Isomorphism]] classes
i.e. suppose $FA\xrightarrow{g}FB$ is an [[Foundations/Category Theory/Isomorphism]]
Then there is an [[Foundations/Category Theory/Isomorphism]] $A\xrightarrow{f}B$ and:
Suppose that given an isomorphism $FA\xrightarrow{g}FB$ 
the unique $A\xrightarrow{f}B$ with $Ff=g$ is an isomorphism, 
with inverse the unique $B\xrightarrow{h}A$ with $Fh=g^{-1}$
### Lemma
If $F$ is [[Foundations/Category Theory/Full]] and [[Foundations/Category Theory/Faithfull]], then $F$ is essentially injective
#### Proof
Let $F$ be [[Foundations/Category Theory/Full]] and [[Foundations/Category Theory/Faithfull]].
Let $f:FA\to FB$ be an [[Foundations/Category Theory/Isomorphism]] in $\mathcal{D}$
As $F$ is [[Foundations/Category Theory/Full]], there is some [[Foundations/Category Theory/Morphism]] $A\xrightarrow{g}B$ with $Fg=f$
as well as a [[Foundations/Category Theory/Morphism]] $B\xrightarrow{h}A$ with $Fh=f^{-1}$
Moreover, as $F$ is [[Foundations/Category Theory/Faithfull]] and
$$
\begin{gather}
F(gh)=(Fg)(Fh) = 1_{FB}=F 1_{B} \\
F(hg)=1_{FA} = F 1_{A}
\end{gather}
$$
then 
$$
\begin{gather}
gh=1_{B} \\
hg=1_{A}
\end{gather}
$$
and thus $g$ is an [[Foundations/Category Theory/Isomorphism]].
Even stronger, as $F$ is [[Foundations/Category Theory/Faithfull]], $g$ is unique.

