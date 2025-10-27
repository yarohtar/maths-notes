Let $A$ be an [[Foundations/Category Theory/Object]] of a [[Foundations/Category Theory/Locally Small]] [[Foundations/Category Theory/Category]] $\mathcal{C}$.
Let $\mathcal{C}(A,-)$ be a [[Foundations/Category Theory/Hom-Functor]] $\mathcal{C}\to \mathrm{Set}$.
and let $F:\mathcal{C}\to \mathrm{Set}$ be a [[Foundations/Category Theory/Functor]] to [[Foundations/Category Theory/Category of Sets]].
These are both objects in the [[Foundations/Category Theory/Category of Functors]] $[\mathcal{C},\mathrm{Set}]$.

Yoneda lemma says that the set of [[Foundations/Category Theory/Natural Transformation]]s $\mathcal{C}(A,-)\to F$
is [[Foundations/Category Theory/Isomorphic]] to $FA$:
$$
[\mathcal{C},\mathrm{Set}](\mathcal{C}(A,-),F) \cong FA
$$
Moreover, this [[Foundations/Category Theory/Isomorphism]] is natural in both $A$ and $F$.
This natural mapping is given by:
$$
\begin{align}
\Phi_{(A,F)}: [\mathcal{C},\mathrm{Set}](\mathcal{C}(A,-), F)  & \to FA  \\
\alpha & \to \alpha_{A}(1_{A})
\end{align}
$$
and its inverse is given by:
$$
\begin{align}
\Psi_{(A,F)}: FA &  \to [\mathcal{C},\mathrm{Set}](\mathcal{C}(A,-),F) \\
x & \to \left(\mathcal{C}(A,-)\xrightarrow{\alpha}F\right) \\
\end{align}
$$
where
$$
\alpha_{B}(A\xrightarrow{f}B)=(Ff)(x)
$$
If $[\mathcal{C},\mathrm{Set}]$ is [[Foundations/Category Theory/Locally Small]], we could say:
given the functors
$$
\begin{align}
[\mathcal{C},\mathrm{Set}](\mathcal{C}(\bullet_{1},-), \bullet_{2})  & : \mathcal{C}\times[\mathcal{C},\mathrm{Set}] \to \mathrm{Set} \\
\bullet_{2}\bullet_{1}  & : \mathcal{C}\times[\mathcal{C},\mathrm{Set}] \to \mathrm{Set}
\end{align}
$$
there is a [[Foundations/Category Theory/Natural Isomorphism]] between them in the category $[\mathcal{C}\times[\mathcal{C},\mathrm{Set}],\mathrm{Set}]$.
But we would be perfectly fine in just stating the naturality in elementary terms 
when $[\mathcal{C},\mathrm{Set}]$ is not [[Foundations/Category Theory/Locally Small]].
### what is actually written here?
In a way, given $A$ from $\mathcal{C}$ and $F$ from $[\mathcal{C},\mathrm{Set}]$,
there is only two ways to make a set out of them.
The obvious one is $FA$.
The other way is the set of [[Foundations/Category Theory/Natural Transformation]]s from $\mathcal{C}(A,-)$ to $F$.
Yoneda says that these two ways are the same "in a natural way".

Suppose that for a [[Foundations/Category Theory/Functor]] $F:\mathcal{C}\to \mathrm{Set}$ we could define a functor
$$
F'=[\mathcal{C},\mathrm{Set}](\mathcal{C}(\bullet,-),F)
$$
which is also $F':\mathcal{C}\to \mathrm{Set}$ 
(i.e. it takes $A\in \operatorname{ob}\mathcal{C}$ and gives us the set $[\mathcal{C},\mathrm{Set}](\mathcal{C}(A,-),F)$)
Then we could define $F'',F''',\dots$
Yoneda lemma says that there are [[Foundations/Category Theory/Natural Isomorphism]]s between these,
so we don't need to worry about the infinite tower.
### Proof
Firstly, fix $(A,F)$ and call $\Phi=\Phi_{(A,F)}$ and $\Psi=\Psi_{(A,F)}$.
We need to prove:
$$
\Phi \Psi=1_{FA}
$$
and
$$
\Psi \Phi = 1_{[\mathcal{C},\mathrm{Set}](\mathcal{C}(A,-),F)}
$$
Firstly, let $x\in FA$:
$$
\begin{gather}
\Phi(\Psi(x)) = \Psi(x)_{A}(1_{A}) = (F 1_{A})(x) = 1_{FA}(x)
\end{gather}
$$
Now let $\alpha:\mathcal{C}(A,-)\to F$ be a [[Foundations/Category Theory/Natural Transformation]].
$$
\Psi(\Phi(\alpha))=\Psi(\alpha_{A}(1_{A}))
$$
For any [[Foundations/Category Theory/Morphism]] $A\xrightarrow{f}B$ in $\mathcal{C}$ we have:
$$
\Psi(\Phi(\alpha))_{B}(f) = (Ff)(\alpha_{A}(1_{A}))
$$
The [[Foundations/Category Theory/Naturality Square]] of $\alpha$ at $f$ is:
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
\mathcal{C}(A,A) \arrow[r,"\mathcal{C}(A{,}f)"] \arrow[d,"\alpha_{A}"]
 & \mathcal{C}(A{,}B) \arrow[d,"\alpha_{B}"] \\
FA \arrow[r,"Ff"]
 & FB
\end{tikzcd}
\end{document}
```
Thus
$$
(Ff)\alpha_{A} = \alpha_{B}( \mathcal{C}(A,f))
$$
where $\mathcal{C}(A,f)$ is actually just $f\cdot$
Thus
$$
\begin{align}
\Psi(\Phi(\alpha))_{B}(f) & = \alpha_{B} (f 1_{A}) = \alpha_{B}(f)  \\
\Psi \Phi(\alpha)  & = \alpha \\
\Psi \Phi  & = 1_{[\mathcal{C},\mathrm{Set}](\mathcal{C}(A,-),F)}
\end{align}
$$
as desired.

Now let us verify that $\Phi$ is a [[Foundations/Category Theory/Natural Transformation]].
Note that $\Phi$ will automatically be a [[Foundations/Category Theory/Natural Isomorphism]]
because we have verified that $\Phi_{(A,F)}$ is always an [[Foundations/Category Theory/Isomorphism]],
and by uniqueness of inverses, $\Psi$ will also be a [[Foundations/Category Theory/Natural Isomorphism]].

Consider first $A\xrightarrow{f}A'$ and the diagram:
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}[column sep=huge]
{[\mathcal{C},\mathrm{Set}]}(\mathcal{C}(A,-),F) 
\arrow[r,"\bullet \cdot \mathcal{C}(f{,}-)"] 
\arrow[d,"\Phi_{(A{,}F)}"]
 & {[\mathcal{C},\mathrm{Set}]}(\mathcal{C}(A',-),F) 
 \arrow[d,"\Phi_{(A'{,}F)}"] \\
FA \arrow[r,"Ff"]
 & FA'
\end{tikzcd}
\end{document}
```

where
$$
\mathcal{C}(f,-): \mathcal{C}(A',-) \to \mathcal{C}(A,-)
$$
is a [[Foundations/Category Theory/Natural Transformation]]
Let $\alpha:\mathcal{C}(A,-)\to F$ be a [[Foundations/Category Theory/Natural Transformation]].
$$
\Phi_{(A,F)}(\alpha) = \alpha_{A}(1_{A})
$$
and
$$
(Ff)(\alpha_{A}(1_{A})) = \alpha_{A'}f
$$
On the other hand
$$
\Phi_{(A',F)}(\alpha \cdot \mathcal{C}(f,-)) = \alpha_{A'} \mathcal{C}(f,A') (1_{A'}) = \alpha_{A'} (1_{A'}f) = \alpha_{A'}f
$$
So $\Phi$ is a [[Foundations/Category Theory/Natural Transformation]] in $A$.

Now we verify that it is a [[Foundations/Category Theory/Natural Transformation]] in $F$.
Consider $\alpha:F\to F'$, a [[Foundations/Category Theory/Natural Transformation]].
We have a diagram
```tikz
\usepackage{tikz-cd}
\begin{document}
\begin{tikzcd}
{[\mathcal{C},\mathrm{Set}]}(\mathcal{C}(A,-),F) 
\arrow[r, "\alpha \cdot\bullet"] 
\arrow[d, "\Phi_{(A{,}F)}"]
& {[\mathcal{C},\mathrm{Set}]}(\mathcal{C}(A,-),F')
\arrow[d,"\Phi_{(A{,}F')}"] \\
FA \arrow[r,"\alpha_{A}"] 
& F'A
\end{tikzcd}
\end{document}
```
Let $\beta:\mathcal{C}(A,-)\to F$ be another [[Foundations/Category Theory/Natural Transformation]].
One branch gives
$$
\alpha_{A}(\Phi_{(A,F)}(\beta)) = \alpha_{A} \beta_{A}(1_{A})
$$
The other gives
$$
\Phi_{(A,F')}(\alpha \beta) = \alpha_{A}\beta_{A}(1_{A})
$$
and thus $\Phi$ is natural in $F$.

So $\Phi$ is natural in $A$ for any $F$
and it is natural in $F$ for any $A$
so we conclude that $\Phi$ is natural in $(A,F)$
(we can also see this by substituting $A\to A'$ in the second square
and then gluing the two squares together).
