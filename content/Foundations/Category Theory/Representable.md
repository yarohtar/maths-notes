We say a [[Functor]] $F:\mathcal{C}\to \mathrm{Set}$ is representable
if it's [[Isomorphic]] to the [[Hom-Functor]] $\mathcal{C}(A,-)$ for some $A$,
i.e. there is some [[Natural Isomorphism]] $\mathcal{C}(A,-)\to F$

We also say a [[Contravariant]] [[Functor]] $F:\mathcal{C}\to \mathrm{Set}$ is representable
if it's [[Isomorphic]] to the the [[Contravariant]] [[Hom-Functor]] $\mathcal{C}(-,A)$ for some $A$.

In each of the following examples,
we will find that the [[Natural Isomorphism]] $\alpha$ at some object $B$
looks like

$$
\alpha_{B}(A\xrightarrow{f}B)=(Ff)(x)
$$

where $x$ is some element of $FA$.
This is the key to [[Yoneda Lemma]].

### Example

The identity functor $1_{\mathrm{Set}}:\mathrm{Set}\to \mathrm{Set}$ is representable.
In particular, take the functor $\mathrm{Set}(1,-)$.
For any set $B$, we have $\mathrm{Set}(1,B)$ [[Isomorphic]] to $B$
The [[Natural Isomorphism]] is defined by sending $B$
to a function $\alpha_{B}:\mathrm{Set}(1,B)\to B$
sending

$$
\alpha_{B}(1\xrightarrow{f}B) = f(0)
$$

(where $0\in 1$ is the only element of $1$).
This is clearly invertible.

### Example

The [[Forgetful Functor]] $U:\mathrm{Gp}\to \mathrm{Set}$ is representable.
In particular consider $\mathrm{Gp}(\mathbb{Z},-)$.
For a [[Group]] $G$ we can find $\alpha_{G}:\mathrm{Gp}(\mathbb{Z},G)\to U(G)$
defined by:

$$
\alpha_{G}(\mathbb{Z}\xrightarrow{f} G) = (Uf)(1)
$$

Note that we needed to "forget" that $f$ is a [[Homomorphism]],
in order to be able to use it as a normal function between sets $U(\mathbb{Z})$ and $U(G)$.
We can then check that $\alpha$ is a [[Natural Isomorphism]].

We might also try $\alpha_{G}(\mathbb{Z}\xrightarrow{f}G)=(Uf)(2)$.
Afterall, this will be a [[Natural Transformation]].
Can we invert it? No.
Consider $G=C_{2}$.
There is two elements of $\mathrm{Gp}(\mathbb{Z},C_{2})$,
but both of them give $0$ when evaluated at $2$.
Thus we cannot differentiate them by their value at $2$.
The special property of $1$ that allows us to define a [[Natural Isomorphism]]
is that $1$ is a [[Universal Element]].

### Example

The [[Contravariant]] [[Power Set Functor]] $P^{*}:\mathrm{Set}\to \mathrm{Set}$
is representable.
In particular, try $\mathrm{Set}(-,2)$.
For any set $A$, we can define $\alpha_{A}:\mathrm{Set}(A,2)\to P^{*}A$ by:

$$
\alpha_{A}(A\xrightarrow{f}2) = \{ x\in A: f(x)=1 \}
$$

i.e.

$$
\alpha_{A}(A\xrightarrow{f}2) = (P^{*}f)(1)
$$

### Example

The [[Covariant]] [[Power Set Functor]] $P:\mathrm{Set}\to \mathrm{Set}$
is not representable.
Let $A$ be any set and $\alpha$ any [[Natural Transformation]] $\mathrm{Set}(A,-)\to P$
Then for a set $B$, we have that $\alpha_{B}$ is a function:

$$
\mathrm{Set}(A,B) \longrightarrow PB
$$

Try $B=1$, noting that $PB=2$.
But clearly $\mathrm{Set}(A,B)$ has only one element,
so $\alpha_{B}$ is not bijective and thus $\alpha$ is not a [[Natural Isomorphism]]
(remember that $\alpha$ is a [[Natural Isomorphism]]
if and only if
each of $\alpha_{B}$ is [[Isomorphic]])
