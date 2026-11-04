Let $f:\{ -1,1 \}^{n}\to \{ -1,1 \}$ be a boolean function on the $p$-[[Biased Cube]].
Then there is some $i$ such that

$$
\mathrm{Inf}_{i}f \geq \frac{\sigma^{2}}{\tilde{I}(f)^{2}} \cdot \left( \frac{\sigma^{4}}{9} \right)^{\tilde{I}(f)-1}
$$

where $\tilde{I}=\frac{I(f)}{\mathrm{Var}(f)}$ is the scaled total [[Influence]].

#### Proof

Let

$$
S=\sum_{i=1}^{n} \mathrm{Stab}_{\frac{\sigma^{2}}{3}}(D_{i}f)
$$

Where $\mathrm{Stab}$ is [[Stability]].
It follows from [[Bonami Lemma]] that $\mathrm{Stab}_{\sigma^{2} / 3}(D_{i}f)\leq \lVert D_{i}f \rVert_{4 /3}^{2}$.
Then $D_{i}f(x)\in \{ -\sigma,0,\sigma \}$ so

$$
\left( \frac{D_{i}f(x)}{\sigma} \right)^{4/3}=\left( \frac{D_{i}f}{\sigma} \right)^{2}
$$

and we conclude $(D_{i}f)^{4/3}=(D_{i}f)^{2}\sigma^{-2/3}$ so:

$$
\mathrm{Stab}_{\sigma^{2} / 3}(D_{i}f) \leq \lVert D_{i}f^{2} \rVert^{3 / 2}\sigma^{-1} = (\mathrm{Inf}_{i}f)^{3/2}\sigma^{-1}
$$

by definition of [[Influence]].
Let $i=\mathrm{argmax}_{j}\ \mathrm{Inf}_{j}f$ and conclude

$$
S\leq \sigma^{-1}(\mathrm{Inf}_{i}f)^{1/2} I(f)
$$

For the lower bound, use:

$$
\mathrm{Stab}_{\sigma^{2} /3}(D_{i}f) = \sum_{A\subseteq[n]} \left( \frac{\sigma^{2}}{3} \right)^{\lvert A \rvert } \widehat{D_{i}f}(A)^{2}
$$

and note

$$
\widehat{D_{i}f}(A) = \begin{cases}
0 & i\in A \\
\hat{f}(A\cup \{ i \}) & i\not\in A
\end{cases}
$$

Now map $A\to A\cup \{ i \}$ and sum over $i$ to find

$$
\begin{align}
S & =\sum_{i} \sum_{A\ni i} \left( \frac{\sigma^{2}}{3} \right)^{\lvert A \rvert -1} \hat{f}(A)^{2} \\
 & =\sum_{A} \lvert A \rvert \left( \frac{\sigma^{2}}{3} \right)^{\lvert A \rvert -1} \hat{f}(A)^{2} \\
 & \geq \frac{3}{\sigma^{2}} \sum_{A\neq \varnothing} \left( \frac{\sigma^{2}}{3} \right)^{\lvert A \rvert } \hat{f}(A)^{2}
\end{align}
$$

Now note that

$$
\begin{align}
\mathrm{Var}f = \sum_{A\neq \varnothing} \hat{f}(A)^{2}
\end{align}
$$

and $x\to\left( \frac{\sigma^{2}}{3} \right)^{x}$ is convex so using [[Jensen's Inequality]]:

$$
\begin{align}
S & \geq\frac{3\mathrm{Var}f}{\sigma^{2}} \left( \frac{\sigma^{2}}{3} \right)^{\sum_{A}\lvert A \rvert \hat{f}(A)^{2} / \mathrm{Var}f} \\
 & = \frac{3\mathrm{Var}f}{\sigma^{2}}\left( \frac{\sigma^{2}}{3} \right)^{\tilde{I}(f)}
\end{align}
$$

and from before

$$
S\leq \sigma^{-1}(\mathrm{Inf}_{i}f)^{1/2}I(f)
$$

so rearranging gives

$$
\mathrm{Inf}_{i}f \geq \frac{\sigma^{2}}{\tilde{I}(f)^{2}} \left( \frac{\sigma^{4}}{9} \right)^{\tilde{I}(f)-1}
$$
