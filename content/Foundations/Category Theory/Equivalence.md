Let $\mathcal{C}$ and $\mathcal{D}$ be [[Category|categories]].
An equivalence between $\mathcal{C}$ and $\mathcal{D}$ consists of [[Functor]]s:

$$
F:\mathcal{C}\to \mathcal{D}\quad %quad
\text{and}\quad %quad
G:\mathcal{D}\to \mathcal{C}
$$

and [[Natural Isomorphism]]s:

$$
\alpha:1_{\mathcal{C}}\to GF\quad %quad
 \text{and}\quad %quad
\beta:FG\to 1_{\mathcal{D}}
$$

We write $\mathcal{C}\simeq \mathcal{D}$ if there exists such an equivalence.

### Lemma

Let $F:\mathcal{C}\to \mathcal{D}$ be a [[Functor]].
Then $F$ is part of an equivalence $\mathcal{C}\simeq \mathcal{D}$
if and only if
$F$ is [[Full]], [[Faithfull]] and [[Essentially Surjective]].

#### Proof

##### $\implies$

Suppose we are given a [[Functor]] $G:\mathcal{D}\to \mathcal{C}$
and [[Natural Isomorphism]]s $1_{\mathcal{C}}\xrightarrow{\alpha} GF$ and $FG\xrightarrow{\beta}1_{\mathcal{D}}$.
For any $B\in \operatorname{ob}\mathcal{D}$,
$\beta_{B}$ is an [[Isomorphism]] $FGB\to B$
so $F$ is [[Essentially Surjective]]
Given $f:A\to B$ in $\mathcal{C}$, note $f=\alpha_{B}^{-1}(GFf)\alpha_{A}$
so $f$ is recoverable from $Ff$, $A$ and $B$
i.e. $f$ is unique given $\operatorname{dom}f$, $\operatorname{cod}f$ and $Ff$
i.e. $F$ is [[Faithfull]].
Suppose there is some $FA\xrightarrow{g}FB$.
The composite:

$$
f:A\xrightarrow{\alpha_{A}}GFA\xrightarrow{Gg}GFB\xrightarrow{\alpha_{B}^{-1}}B
$$

satisfies:

$$
GFf=\alpha_{B}f\alpha_{A}^{-1}=Gg
$$

Note that $G$ is [[Faithfull]] for the same reason as $F$
so we get $Ff=g$.

##### $\impliedby$

For each $B\in \operatorname{ob}\mathcal{D}$ choose an [[Object]] $GB$ of $\mathcal{C}$
and an [[Isomorphism]] $\beta_{B}:FGB\to B$ in $\mathcal{D}$,
which we can do as $F$ is [[Essentially Surjective]].
Given $B\xrightarrow{g}C$ in $\mathcal{D}$ consider

$$
FGB\xrightarrow{\beta_{B}}B\xrightarrow{g}C\xrightarrow{\beta_{C}^{-1}}FGC
$$

and define $GB\xrightarrow{Gg}GC$ to be the unique [[Morphism]] such that

$$
FGg=\beta_{C}^{-1}g\beta_{B}
$$

which we can do as $F$ is [[Full]] (existence) and [[Faithfull]] (uniqueness)

Uniqueness implies [[Functor|functoriality]]:
given $C\xrightarrow{h}D$, $G(gh)$ and $(Gg)(Gh)$ have the same image under $F$
so they're equal.
By construction, $\beta$ is a [[Natural Isomorphism]] $FG\to 1_{\mathcal{D}}$
Define $\alpha_{A}:A\to GFA$ to be the unique [[Morphism]]
whose inverse under $F$ is

$$
FA\xrightarrow{\beta_{FA}^{-1}}FGFB
$$

As we already saw, $\alpha_{A}$ is an [[Isomorphism]] for all $A$,
and [[Naturality Square]]s for $\alpha$ are mapped by $F$
to naturality squares for $\beta ^{-1}$ so they commute.

### Example

[[Category of Partial Functions]] $\mathrm{Part}$ is equivalent to
the category $\mathrm{Set}_{*}$ of pointed sets.
We define $F:\mathrm{Set}_{*}\to \mathrm{Part}$ by

$$
F(A,a)=A\setminus \{ a \} 
$$

$$
F((A,a)\xrightarrow{f}(B,b))
$$

defined by $Ff(x)=f(x)$ if $f(x)\neq b$, undefined otherwise
and $G:\mathrm{Part}\to \mathrm{Set}_{*}$ by $G(A)=(A\cup \{ A \},A)$

$$
G(A\xrightarrow{f}B)(x)=\begin{cases}
f(x) & x\in A\text{ and } f(x) \text{ defined} \\
B  & \text{otherwise}
\end{cases}
$$

Then $FG=1_{\mathrm{Part}}$ and there is a [[Natural Isomorphism]] $1_{\mathrm{Set_{*}}}\to GF$
sending $(A,a)$ to $G(A\setminus \{ a \})$
Note that $\mathrm{Part}$ has a singleton isomorphism class of objects $\{ \varnothing \}$,
but $\mathrm{Set}_{*}$ doesn't so $\mathrm{Part}\not\cong \mathrm{Set}_{*}$.

### Example

The [[Category]] $\mathrm{fdVect}_{K}$ of finite dim [[Vector Space]]s over $K$,
is equivalent to $\mathrm{fdVect}_{K}^{op}$ using the [[Dual Space Functor]] $(\cdot)^{*}$ and the [[Natural Transformation]] ...

#### Example

$\mathrm{fdVect}_{K}$ is also equivalent to $\mathrm{Mat}_{K}$
the functor $F:\mathrm{Mat}_{K}\to \mathrm{fdVect}_{K}$ sends $n$ to $K^{n}$
and a $(p\times n)$ matrix $A$ to the linear map $K^{n}\to K^{p}$
which it represents wrt the standard bases
To define $G:\mathrm{fdVect}_{K}\to \mathrm{Mat}_{K}$, choose a basis for each finite dim space,
and define $G(V)=\dim V$ and $G(V\xrightarrow{\theta}W)=$ matrix representing $\theta$ w.r.t the chosen basis
Now $GF=1_{\mathrm{Mat}_{K}}$ provided we choose the standard bases for the spaces $K^{n}$
$FG\neq 1_{\mathrm{fdVect}_{K}}$ but the chosen basis for $V$ yields an isomorphism $FG(V)=K^{\dim V}\to V$
and these form a [[Natural Transformation]] isomorphism $FG\to 1_{\mathrm{fdVect}_{K}}$
