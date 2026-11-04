Suppose a [[Functor]] $F:\mathcal{C}\to \mathrm{Set}$ is [[Representable]].
Then $F$ is [[Isomorphic]] to some $\mathcal{C}(A,-)$.
We say that $(A,\alpha)$ is a representation of $F$
where $\alpha$ is a [[Natural Isomorphism]]

$$
\alpha:\mathcal{C}(A,-) \to F
$$

By [[Yoneda Lemma]], there is some element $x\in FA$ such that

$$
\alpha_{B}(A\xrightarrow{f}B) = (Ff)(x)
$$

for any $B\in \operatorname{ob}\mathcal{C}$.
In this case, we also say that $(A,x)$ is a representation of $F$.
We also call $x$ a [[Universal Element]].

### Lemma

If $(A,x)$ and $(B,y)$ are both representations of $F:\mathcal{C}\to \mathrm{Set}$
then there is a unique [[Isomorphism]] $A\xrightarrow{f}B$ in $\mathcal{C}$ such that $(Ff)(x)=y$.

#### Proof

Let $f:A\to B$ in $\mathcal{C}$
Let $\alpha:\mathcal{C}(A,-)\to F$ be a [[Natural Isomorphism]] such that $\alpha_{A}(1_{A})=x$
and let $\beta:\mathcal{C}(B,-)\to F$ be a [[Natural Isomorphism]] such that $\beta_{B}(1_{B})=y$.
Now

$$
(Ff)(x) = (Ff)\alpha_{A}(1_{A}) = \alpha_{B}\mathcal{C}(f,-)(1_{A}) = \alpha_{B} f
$$

Thus $(Ff)(x)=y$
if and only if

$$
y = \alpha_{B}f
$$

Clearly now $f$ is the unique

$$
f=\alpha_{B}^{-1}(y)
$$

There is also this [[Commutative Diagram]]

```tikz
\usepackage{tikz-cd}

\begin{document}
\begin{tikzcd}
\mathcal{C}(B,\cdot) \arrow[rr,"\mathcal{C}(f{,}\cdot)"] \arrow[dr,swap,"\beta"] 
&&
\mathcal{C}(A,\cdot) \arrow[dl,"\alpha"] \\
& F
\end{tikzcd}
\end{document}
```
