Let $F:\mathcal{C}\to \mathcal{D}$ be a [[Functor]]
Then $F$ is essentially injective if it is injective on [[Isomorphism]] classes
i.e. suppose $FA\xrightarrow{g}FB$ is an [[Isomorphism]]
Then there is an [[Isomorphism]] $A\xrightarrow{f}B$ and:
Suppose that given an isomorphism $FA\xrightarrow{g}FB$
the unique $A\xrightarrow{f}B$ with $Ff=g$ is an isomorphism,
with inverse the unique $B\xrightarrow{h}A$ with $Fh=g^{-1}$

### Lemma

If $F$ is [[Full]] and [[Faithfull]], then $F$ is essentially injective

#### Proof

Let $F$ be [[Full]] and [[Faithfull]].
Let $f:FA\to FB$ be an [[Isomorphism]] in $\mathcal{D}$
As $F$ is [[Full]], there is some [[Morphism]] $A\xrightarrow{g}B$ with $Fg=f$
as well as a [[Morphism]] $B\xrightarrow{h}A$ with $Fh=f^{-1}$
Moreover, as $F$ is [[Faithfull]] and

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

and thus $g$ is an [[Isomorphism]].
Even stronger, as $F$ is [[Faithfull]], $g$ is unique.
