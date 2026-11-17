Let $\rho \in[0,1]$ and $f:\{ -1, 1\}^{n}\to \mathbb{R}$ be a function on the $p$-[[Biased Cube]]
Let $T_{\rho}$ be the $p$-biased [[Noise]] operator.
Then

$$
\mathrm{Stab}_{\rho}f=\braket{ f | T_{\rho}f } = \mathop{\Large\mathbb{E}}\limits_{x\sim_{\rho}y} f(x)f(y)
$$

### Lemma

$$
\mathrm{Stab}_{\rho}f=\sum_{A\subseteq[n]}\rho^{\lvert A \rvert }\hat{f}(A)^{2}
$$

### Lemma

Let $\rho=\frac{\sigma^{2}}{3}$

$$
\mathrm{Stab}_{\rho}f \leq \lVert f \rVert ^{2}_{4 / 3}
$$

#### Proof

By [[Bonami Lemma]].
