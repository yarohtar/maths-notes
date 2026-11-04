Let $\mathcal{L}$ be a [[Language]].
Let $T$ be a [[Consistent]] $\mathcal{L}$-[[Theory]]
Define the equivalence relation on formulas
$\varphi \sim \psi$ if and only if $T\vdash (\varphi \iff \psi)$,
and for each $n\in \mathbb{N}$ fix variables $x_{1},x_{2},\dots,x_{n}$ let

$$
F_{n}=\{ [\varphi]: \text{$\varphi$ has free variables $x_{1},\dots,x_{n}$}\}
$$

Clearly $F_{n}$ is a [[Boolean Algebra]].
The $n$-type space over $T$ is defined as the [[Stone Space]] of $F_{n}$
and we write

$$
S_{n}(T) = S(F_{n})
$$

The elements of this space are $n$-[[Formula Type]]s.

Moreover, if $\mathcal{M}$ is an $\mathcal{L}$-[[Structure]] and $A\subseteq M$ we define

$$
S_{n}^{\mathcal{M}}(A)=S_{n}(\mathrm{Th}_{A}(\mathcal{M}))
$$

where $\mathrm{Th}_{A}(\mathcal{M})$ are all theorems of $\mathcal{M}$ when seen as an $\mathcal{L}_{A}$-[[Structure]]
for $\mathcal{L}_{A}$ the language $\mathcal{L}$ extended by constant symbols $\{ t_{a} : a\in A \}$
and $t_{a}^{\mathcal{M}}=a$.

Note that this is always defined as $\mathrm{Th}_{A}(\mathcal{M})$ is [[Consistent]]
as it has a model $\mathcal{M}$.

### Lemma

Formula type space is [[Compact]] [[Hausdorff]] [[Totally Disconnected]].

#### Proof

Follows from [[Stone Space]].

### Proposition

Let $\mathcal{M}$ be a [[Model]], $A\subseteq M$, and fix the language $\mathcal{L}_{A}$.
Let also $\bar{x}\in M^{n}$ and define

$$
\mathrm{tp}^{\mathcal{M}}(\bar{x} / A) = \{ [\varphi]: \mathcal{M}\models \varphi(\bar{x}) \}
$$

Then this is an [[Ultrafilter]] i.e.

$$
\mathrm{tp}^{\mathcal{M}}(\bar{x} / A) \in S_{n}^{\mathcal{M}}(A)
$$

Moreover, for any $p\in S_{n}^{\mathcal{M}}(A)$,
there is an [[Elementary Extension]] $\mathcal{N}$ of $\mathcal{M}$
with $\lvert N \rvert\leq \lvert M \rvert+\lvert \mathcal{L} \rvert+\aleph_{0}$
and some $\bar{x}\in N^{n}$ such that $p=\mathrm{tp}^{\mathcal{N}}(\bar{x} / A)$.

#### Proof

First bit is trivial.

Let $p\in S_{n}^{\mathcal{M}}(A)$.
Then $p\in S_{n}(\mathrm{Th}_{A}(\mathcal{M}))$.
Let $\Sigma$ be a finite subset of $\mathrm{Th}_{M}(\mathcal{M})$ and $\varphi ^{*}=\bigwedge_{\varphi \in \Sigma}\varphi$.
Then $\mathcal{M}\models \varphi ^{*}$ and we can write $\varphi ^{*}=\varphi ^{*}(\bar{b})$
as an $\mathcal{L}_{A}$ formula for some $\bar{b}\in (M\setminus A)^{m}$.
Thus $(\exists \bar{v})\ \varphi ^{*}(\bar{v})$ is in $\mathrm{Th}_{A}(\mathcal{M})$.
Let $\mathcal{N}$ be a model of $p\cup \mathrm{Th}_{A}(\mathcal{M})$
(as $p$ [[Consistent]] and closed under equivalence in $\mathrm{Th}_{A}(\mathcal{M})$)
Then find some $\bar{b}\in N^{m}$ with $\mathcal{N}\models \varphi ^{*}(\bar{b})$.
In particular $\mathcal{N}\models \Sigma$ so $\Sigma$ is consistent.

By [[Compactness Theorem]], find $\mathcal{N}\models p\cup \mathrm{Th}_{M}(\mathcal{M})$.
Then $p=\mathrm{tp}^{\mathcal{N}}(\bar{x} / A)$ for some $\bar{x}\in N^{n}$.
Also there is an [[Elementary Embedding]] of $\mathcal{M}$ into any such $\mathcal{N}$.
We are done by [[The Downward Löwenheim-Skolem Theorem]]
(because the language of $p\cup \mathrm{Th}_{M}(\mathcal{M})$ has size $\lvert M \rvert+\lvert A \rvert+\lvert \mathcal{L} \rvert=\lvert M \rvert+\lvert \mathcal{L} \rvert$).
