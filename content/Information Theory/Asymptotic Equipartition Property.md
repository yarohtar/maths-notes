Let $\{ X_{n} \}$ be a [[Probability/Random Variable]]s taking values in a discrete set $A$
Let $P^{n}:A^{n}\to[0,1]$ be the joint distribution of $(X_{1},\dots,X_{n})$:
$$
P^{n}(x_{1}^{n})=\mathbb{P}(X_{1}^{n}=x_{1}^{n})
$$
for all $x_{1}^{n}\in A^{n}$.
(using notation $X_{1}^{n}=(X_{1},\dots,X_{n})$)
Then we say that $\{ X_{n} \}$ satisfies AEP with entropy $H\geq 0$ if:
$$
-\frac{1}{n}\log P^n(X_{1}^{n}) \xrightarrow{p} H \quad %quad
\text{as }n\to \infty
$$
where $\xrightarrow{p}$ means [[Information Theory/Convergence in Probability]]
and $P^{n}(X_{1}^{n})$ is [[Information Theory/Random Probability of Random Variable]]
##### Note
There are alternative definitions 
(e.g. based on [[Information Theory/Typical Strings#Lemma (AEP)]])
However, this definition made the most sense to me, so I'm using it as main.
Note also that I'm making no assumptions about $X_{n}$.
We can, however, prove that [[Information Theory/Discrete Memoryless Source]] satisfies AEP.
I am also not saying anything about $H$
although I call it entropy, to hint that it should be [[Information Theory/Mathematical Entropy]]
[[Information Theory/Interpretation of Asymptotic Equipartition Property]]
## Theorem
Suppose $\{ X_{n} \}$ satisfies AEP with entropy $H\geq 0$.
Then the smallest sets of strings $B_{n}\subseteq A^{n}$ such that:
$$
\mathbb{P}(X_{1}^{n}\in B_{n}) \longrightarrow 1 \quad %quad
\text{as}\quad %quad
n\to \infty
$$
have sizes $\lvert B_{n} \rvert\approx2^{nH}$.

More precisely, the following lemmata:
### Lemma 1
For every $\epsilon>0$
there is a sequence of sets $\{ B_{n}\subseteq A^{n} \}$ with $\lvert B_{n} \rvert\leq 2^{n(H+\epsilon)}$
such that:
$$
\mathbb{P}(X_{1}^{n}\in B_{n}) \longrightarrow 1 \quad %quad
\text{as}\quad %quad
n\to \infty
$$
#### Proof
Let $\epsilon>0$.
Take $B_{n}=B_{n}^{*}(\epsilon)$, the sets of [[Information Theory/Typical Strings]] with entropy $H$.
We know that
$$
\lvert B_{n}^{*}(\epsilon) \rvert \leq 2^{n(H+\epsilon)}
$$
Also $\{ X_{n} \}$ satisfies AEP 
thus by [[Information Theory/Typical Strings#Lemma (AEP)]]:
$$
\mathbb{P}(X_{1}^{n}\in B_{n}^{*}(\epsilon)) \longrightarrow 1
$$
### Lemma 2
Let $\epsilon>0$.
Suppose for some $\{ B_{n}\subseteq A^{n} \}$ we have:
$$
\mathbb{P}(X_{1}^{n}\in B_{n}) \longrightarrow 1 \quad %quad
\text{as} \quad %quad
n\to \infty
$$
Then for all large enough $n$:
$$
(1-\epsilon)2^{n(H-\epsilon)} \leq \lvert B_{n} \rvert
$$
#### Proof
Let $B_{n}^{*}=B_{n}^{*}(\epsilon)$ be the set of [[Information Theory/Typical Strings]] with entropy $H$.
By definition:
$$
\mathbb{P}(x_{1}^{n}\in B_{n}^{*})\leq 2^{-n(H-\epsilon)}
$$
and thus:
$$
\begin{align}
P^{n}(B_{n}\cap B_{n}^{*})  & \leq \lvert B_{n}\cap B_{n}^{*} \rvert \cdot 2^{-n(H-\epsilon)}  \\
 & \leq \lvert B_{n} \rvert \cdot 2^{-n(H-\epsilon)}

\end{align}
$$
Note that by assumption $P^{n}(B_{n})\to 1$
and by [[Information Theory/Typical Strings#Lemma (AEP)]] $P^{n}(B_{n}^{*})\to 1$
so using [[Information Theory/Inclusion-Exclusion Principle]]:
$$
\begin{align}
P^{n}(B_{n}\cap B_{n}^{*})  & = P^{n}(B_{n}) + P^{n}(B_{n}^{*}) - P(B_{n}\cup B_{n}^{*}) \\
 & \geq P^{n} (B_{n}) + P^{n}(B_{n}^{*}) - 1  \\
 & \longrightarrow 1 \quad %quad
\text{as} \quad %quad
n\to \infty
\end{align}
$$
Thus, for large enough $n$:
$$
1-\epsilon\leq P^{n}(B_{n}\cap B_{n}^{*}) \leq \lvert B_{n} \rvert \cdot 2^{-n(H-\epsilon)}
$$
and the inequality follows.
