Let $\mathcal{C}$ and $\mathcal{D}$ be [[Foundations/Category Theory/Category\|categories]].
An equivalence between $\mathcal{C}$ and $\mathcal{D}$ consists of [[Foundations/Category Theory/Functor]]s:
$$F:\mathcal{C}\to \mathcal{D}\quad %quad
\text{and}\quad %quad
 G:\mathcal{D}\to \mathcal{C}$$
and [[Foundations/Category Theory/Natural Isomorphism]]s:
$$\alpha:1_{\mathcal{C}}\to GF\quad %quad
 \text{and}\quad %quad
 \beta:FG\to 1_{\mathcal{D}}$$
We write $\mathcal{C}\simeq \mathcal{D}$ if there exists such an equivalence.

### Lemma
Let $F:\mathcal{C}\to \mathcal{D}$ be a [[Foundations/Category Theory/Functor]].
Then $F$ is part of an equivalence $\mathcal{C}\simeq \mathcal{D}$ 
if and only if
$F$ is [[Foundations/Category Theory/Full]], [[Foundations/Category Theory/Faithfull]] and [[Foundations/Category Theory/Essentially Surjective]].
#### Proof
##### $\implies$
Suppose given $G$, $\alpha$ and $\beta$ (as in the [[Foundations/Category Theory/Equivalence]] definition)
For any $B\in \operatorname{ob}\mathcal{D}$, 
$\beta_{B}$ is an isomorphism $FGB\to B$ so $F$ is [[Foundations/Category Theory/Essentially Surjective]]
Given $f:A\to B$ and $f=\alpha_{B}^{-1}(GFf)\alpha_{A}$ 
so $f$ is recoverable from $Ff$, $A$ and $B$
i.e. $F$ is [[Foundations/Category Theory/Faithfull]]
Suppose given $FA\xrightarrow{g}FB$ the composite:
$$
f:A\xrightarrow{\alpha_{A}}GFA\xrightarrow{Gg}GFB\xrightarrow{\alpha_{B}^{-1}}B
$$
satisfies $GFf=Gg$.
Note that $G$ is [[Foundations/Category Theory/Faithfull]] for the same reason as $F$ 
so we get $Ff=g$
##### $\impliedby$
For each $B\in \operatorname{ob}\mathcal{D}$ choose an object $GB$ of $\mathcal{C}$ and an isomorphism $\beta_{B}:FGB\to B$ in $\mathcal{D}$.
Given $B\xrightarrow{g}C$ in $\mathcal{D}$ define $GB\xrightarrow{Gg}GC$ to be the unique [[Foundations/Category Theory/Morphism]] whose range under $F$ is 
$$
FGB\xrightarrow{\beta_{D}}B\xrightarrow{g}C\xrightarrow{\beta_{C}^{-1}}FGC
$$
Uniqueness implies [[Foundations/Category Theory/Functor]]iality:
given $C\xrightarrow{h}D$, $G(gh)$ and $(Gg)(Gh)$ have the same image under $F$
so they're equal.
By construction, $\beta$ is a [[Foundations/Category Theory/Natural Isomorphism]] $FG\to 1_{\mathcal{D}}$
Define $\alpha_{A}:A\to GFA$ to be the unique morphism whose inverse under $F$ is $FA\xrightarrow{\beta_{FA}^{-1}}FGFB$
As we already saw, $\alpha_{A}$ is iso for all $A$, 
and naturality squares for $\alpha$ are mapped by $F$ to nat squares for $\beta ^{-1}$ so they commute.
 

### Example
[[Foundations/Category Theory/Category of Partial Functions]] $\mathrm{Part}$ is equivalent to the category $\mathrm{Set}_{*}$ of pointed sets:
we define $F:\mathrm{Set}_{*}\to \mathrm{Part}$ by
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
Then $FG=1_{\mathrm{Part}}$ and there is a natural isomorphism $1_{\mathrm{Set_{*}}}\to GF$ sending $(A,a)$ to $G(A\setminus \{ a \})$
Note that $\mathrm{Part}$ has a singleton isomorphism class of objects $\{ \emptyset \}$, but $\mathrm{Set}_{*}$ doesn't so $\mathrm{Part}\not\cong \mathrm{Set}_{*}$

### Example
The [[Foundations/Category Theory/Category]] $\mathrm{fdVect}_{K}$ of finite dim [[Algebra/Vector Spaces/Vector Space]]s over $K$,
is equivalent to $\mathrm{fdVect}_{K}^{op}$ using the [[Foundations/Category Theory/Dual Space Functor]] $(\cdot)^{*}$ and the [[Foundations/Category Theory/Natural Transformation]] ...
#### Example
$\mathrm{fdVect}_{K}$ is also equivalent to $\mathrm{Mat}_{K}$ 
the functor $F:\mathrm{Mat}_{K}\to \mathrm{fdVect}_{K}$ sends $n$ to $K^{n}$ 
and a $(p\times n)$ matrix $A$ to the linear map $K^{n}\to K^{p}$ which it represents wrt the standard bases
To define $G:\mathrm{fdVect}_{K}\to \mathrm{Mat}_{K}$ choose a basis for each finite dim space,
and define $G(V)=\dim V$ and $G(V\xrightarrow{\theta}W)=$ matrix representing $\theta$ w.r.t the chosen basis
Now $GF=1_{\mathrm{Mat}_{K}}$ provided we choose the standard bases for the spaces $K^{n}$
$FG\neq 1_{\mathrm{fdVect}_{K}}$ but the chosen basis for $V$ yields an isomorphism $FG(V)=K^{\dim V}\to V$
and these form a [[Foundations/Category Theory/Natural Transformation]] isomorphism $FG\to 1_{\mathrm{fdVect}_{K}}$
