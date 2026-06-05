Let $M$ be a countable [[Foundations/Transitive Model]] and $\mathbb{P}\in M$ a [[Foundations/Forcing/Forcing Partial Order]].
Then there is an [[Foundations/Absolute]] [[Foundations/Forcing/Forcing Relation]] $\Vdash$ on $\mathbb{P}\times \mathrm{Se nt}_{\mathbb{P},M}$.
## Proof (chunky one)
### Definition of $\Vdash$
We first define the [[Foundations/Forcing/Forcing Relation]] $\Vdash$ on atomic formulas.
From the definition of the [[Foundations/Forcing/Forcing Relation]], 
we want $\sigma^{G}\in \tau^{G}$ precisely when some $p\in G$ has $p\Vdash \sigma \in \tau$.
Note that $\sigma^{G}\in \tau^{G}$ iff $(\pi,s)\in \tau$ and $\sigma^{G}=\pi^{G}$ for some $s\in G$.
But then also $\sigma^{G}=\pi^{G}$ iff some $q\in G$ has $q\Vdash \sigma=\pi$.

We conclude that $p\Vdash \sigma \in \tau$ iff any filter $G$ containing $p$
has some $(\pi,s)\in \tau$ with $s \in G$ and $q\in G$ with $q\Vdash \sigma=\pi$.
It is then convenient to look at 
$$
D(\tau)=\{ q\leq p: (\exists(\pi,s)\in \tau)\ q\leq s\land q\Vdash \sigma=\pi \}
$$
If this set is [[Foundations/Poset/Dense Below]] $p$, then any filter $G$ containing $p$ will intersect it.
This gives us a $q\in D\cap G$ and thus also some $(\pi,s)\in \tau$.
From $q\leq s$ we find that $s \in G$ 
and from $q\Vdash \sigma=\pi$ we find $\sigma^{G}=\pi^{G}$ and thus $\sigma^{G}\in \tau^{G}$.

To define $p\Vdash \sigma=\tau$ we use this idea along with [[Foundations/Set Theory/Axiom of Extensionality]].
Say that $p\Vdash \sigma \subseteq \tau$ if and only if 
$$
D_{\pi,s}(\tau) = \{ q \leq p : q \leq s \implies (\exists (\pi',s')\in \tau)\ q\leq s' \land q \Vdash \pi=\pi' \}
$$
is dense below $p$ for all $(\pi,s)\in \sigma$.
Then $p\Vdash \sigma=\tau$
if and only if
$$
p\Vdash \sigma \subseteq \tau\quad %quad
\land\quad %quad
p\Vdash \tau \subseteq \sigma.
$$
This is now enough to give a recursive definition on the rank of [[Foundations/Forcing/Name]]s.
This wraps up the atomic formulas.
For composites, we have the following definition:
$$
\begin{align}
p\Vdash \phi \land \psi  & \iff p\Vdash \phi \text{ and } p\Vdash\psi \\
p\Vdash\neg \phi  &  \iff (\forall q\leq p)\, q\not\Vdash\phi \\
p\Vdash (\exists x)\phi(x) & \iff \{ r: (\exists \sigma)\, r\Vdash \phi(\sigma) \} \text{ is dense below } p
\end{align}
$$
By the lemmas about [[Foundations/Poset/Dense Below]], we can show that $\Vdash$ is downwards closed.
Furthermore, one can check that this definition is [[Foundations/Absolute]] for $M$.
### Properties
Let $G$ be a $\mathbb{P}$-[[Foundations/Forcing/Generic Filter]] over $M$.
To find that $\Vdash$ is a [[Foundations/Forcing/Forcing Relation]], we need to show that:
$$
\begin{gather}
M[G] \models \varphi(\tau_{1}^{G},\dots,\tau_{k}^{G}) \\
\iff \\
(\exists p\in G)\, M\models (p \Vdash \varphi(\tau_{1},\dots,\tau_{k}))
\end{gather}
$$
We shall first prove this for atomic $\varphi$, 
which boils down to the following two equivalences 
$$
\begin{gather}
\sigma^{G} \subseteq \tau^{G} \iff (\exists p\in G)\ p \Vdash \sigma\subseteq \tau \\
\sigma^{G} \in \tau^{G} \iff (\exists p\in G)\ p\Vdash \sigma \in \tau
\end{gather}
$$
We prove these by induction on terms.
Then we prove it for non-atomic $\varphi$ by induction on formula complexity.
These will together imply that $\Vdash$ is a [[Foundations/Forcing/Forcing Relation]].
### Claim 1
$$
\sigma^{G}\subseteq \tau^{G} \iff (\exists p\in G)\ p\Vdash \sigma \subseteq \tau
$$
#### Proof
By $\in$-induction.
##### $\impliedby$
Suppose $p\in G$ forces $\sigma \subseteq \tau$.
Fix $\pi^{G}\in \sigma^{G}$.
Then there is some $s \in G$ with $(\pi,s)\in \sigma$.
As $G$ is a [[Foundations/Poset/Filter]], there is some $q\leq p,s$. 
By assumption, $D_{\pi,s}(\tau)$ is [[Foundations/Poset/Dense Below]] $p$, and so also below $q\in G$.
But then one finds some $r\in D_{\pi,s}(\tau)\cap G$ with $r\leq q$.
By definition of $D_{\pi,s}(\tau)$ and from $r\leq s$, 
we find $(\pi',s')\in \tau$ with $r\leq s'\land r\Vdash \pi=\pi'$.
As $r\in G$, by induction hypothesis find $\pi^{G}=\pi'^{G}$.
Also $s'\in G$ so $\pi'^{G}\in \tau^{G}$ and thus $\pi^{G}\in \tau^{G}$ so $\sigma^{G}\subseteq \tau^{G}$.
##### $\implies$
Fix $p\in \mathbb{P}$ and suppose that some $D_{\pi,s}(\tau)$ is not dense below $p$ 
i.e. that $p$ doesn't force $\sigma \subseteq \tau$.
Then for some $r\leq p$ and all $q\leq r$ we have
$$
q\leq s \land (\forall(\pi',s')\in \tau)\ \neg(q\leq s'\land q\Vdash \pi=\pi')
$$
In particular, $r\leq s$ and for any $(\pi',s')\in \tau$ and any $q\in \mathbb{P}$
$$
q\leq s' \land q \Vdash \pi=\pi' \implies \neg(q\leq r)
$$
Suppose that some $t\leq q,r$. 
From $t\leq q$ and $q\Vdash \pi=\pi'$ we find that $t\Vdash \pi=\pi'$.
Also $t\leq q\leq s'$ and thus $\neg(t\leq r)$ as above.
We conclude that $q$ and $r$ are [[Foundations/Poset/Incompatible]] here and thus
$$
r\leq s \land (\forall(\pi',s')\in \tau)(\forall q\in \mathbb{P})\ q\leq s'\land q\Vdash \pi=\pi' \implies  q \operatorname{\bot}r
$$
Call this sentence $\phi_{r,\pi,s}$ and let $\phi_{r}$ be 
$$
(\exists(\pi,s)\in \sigma)\ \phi_{r,\pi,s}
$$
Define the set 
$$
D=\{ r : r \Vdash \sigma \subseteq \tau \lor \phi_{r} \}
$$
For any $p\in \mathbb{P}$, either $D_{\pi,s}(\tau)$ is always dense below $p$,
in which case $p\Vdash \sigma \subseteq \tau$ so $p\in D$,
or there is some $r\leq p$ with $\phi_{r}$, by previous analysis.
We conclude that $D$ is dense so there is some $r\in D\cap G$.
Assume that $\phi_{r}$ and thus find $(\pi,s)\in \sigma$ with $r\leq s$ 
and for any $(\pi',s')\in \tau$ and any $q\in \mathbb{P}$ with $q\leq s'\land q\Vdash \pi=\pi'$ 
we have $q \operatorname{\bot}r$.
Then $s \in G$ so $\pi^{G}\in \sigma^{G}$ so $\pi^{G}\in \tau^{G}$, 
so there is some $(\pi',s')\in \tau$ with $\pi'^{G}=\pi^{G}$ and $s'\in G$.
By induction hypothesis, there is some $q'\in G$ with $q'\Vdash \pi=\pi'$.
But then there is some $q\in G$ with $q\leq s',q'$,
and we get $q\Vdash \pi=\pi'$. 
Then by above $q \operatorname{\bot}r$ which is a contradiction as they are both in $G$.
We conclude that $\phi_{r}$ is false so $r\Vdash \sigma \subseteq \tau$. 
This completes the proof.
### Claim 2
Assuming [[Foundations/Forcing/The Forcing Theorem#Claim 1]]:
$$
\sigma^{G}\in \tau^{G} \iff (\exists p\in G)\ p\Vdash \sigma \in \tau
$$
#### Proof
By $\in$-induction.
##### $\implies$
Assume $\sigma^{G}\in \tau^{G}$.
Thus find some $(\pi,s)\in \tau$ with $\pi^{G}=\sigma^{G}$ and $s \in G$.
By [[Foundations/Forcing/The Forcing Theorem#Claim 1]], find $r\in G$ such that $r\Vdash \pi=\sigma$.
Then find $p\leq r,s$ in $G$.
Note that any $q\leq p$ has $q\leq s$ and $q\Vdash \pi=\sigma$ so
$$
D=\{ q\leq p : (\exists(\pi,s)\in \tau)\ q\leq s\land q\Vdash \pi=\sigma \}
$$
is [[Foundations/Poset/Dense Below]] $p$ and thus $p\Vdash \sigma \in \tau$ and $p\in G$.
#### $\impliedby$
Suppose some $p\Vdash \sigma \in \tau$ for some $p\in G$.
Then $D$ (as above) is [[Foundations/Poset/Dense Below]] $p$. 
Thus find $q\in G\cap D$ and $(\pi,s)\in \tau$ with $q\leq s$ and $q\Vdash \pi=\sigma$.
Then $s \in G$ so $\pi^{G}\in \tau^{G}$.
Also by [[Foundations/Forcing/The Forcing Theorem#Claim 1]] and $q\Vdash \pi=\sigma$ we find $\pi^{G}=\sigma^{G}$ so $\sigma^{G}\in \tau^{G}$.
### Claim 3
If $\Vdash$ satisfies the [[Foundations/Forcing/Forcing Relation]] property for $\phi$ and $\psi$ 
then so it does for $\phi \land \psi$.
### Claim 4
If $\Vdash$ satisfies the [[Foundations/Forcing/Forcing Relation]] property for $\phi$
then so it does for $\neg \phi$.
#### Proof
Assume 
$$
M[G]\models \phi \iff (\exists p\in G)\, p \Vdash \phi
$$
We want to show: 
$$
M[G] \models \neg \phi \iff (\exists p\in G)\, p\Vdash \neg \phi
$$
##### $\implies$
Consider 
$$
D=\{ p: p\Vdash \phi \text{ or } p \Vdash \neg \phi \}
$$
By definition of $p\Vdash\neg \phi$, this set is [[Topology/Dense]].
Thus find some $p\in D\cap G$.
By assumption it follows that 
$$
M[G] \not\models \phi
$$
so by the induction hypothesis $p\not\Vdash\phi$.
But then by definition $p\Vdash\neg \phi$.
##### $\impliedby$
Suppose $p\in G$ and $p\Vdash\neg \phi$.
Assume that $M[G]\models \phi$ (towards a contradiction)
By induction hypothesis, find $r\in G$ such that $r\Vdash\phi$.
Then find some $q\in G$ with $q\leq p,r$.
Now by definition of $p\Vdash\neg \phi$, we have $q\not\Vdash\phi$.
But also $q\leq r\Vdash\phi$ so $q\Vdash\phi$ (by downwards closure of $\Vdash$).
This is a contradiction.
### Claim 5
If $\Vdash$ satisfies the [[Foundations/Forcing/Forcing Relation]] property for $\phi$
then so it does for $(\exists x)\,\phi(x)$.
#### Proof
##### $\implies$
Assume that $M[G]\models (\exists x)\ \phi(x)$.
Thus take some $x\in M[G]$ with $M[G]\models \phi(x)$.
Then $x=\sigma^{G}$ for some $\sigma \in \mathrm{Name}^{\mathbb{P}}\cap M$.
Then there is some $p\in G$ with $p\Vdash \phi(\sigma)$.
Thus any $r\leq p$ has $r\Vdash \phi(\sigma)$.
We have proved $(\exists \sigma)\ r\Vdash \phi(\sigma)$ for all $r\leq p$ and thus $p\Vdash (\exists \sigma)\ \phi(\sigma)$.
##### $\impliedby$
Assume that $p\Vdash(\exists \sigma)\ \phi(\sigma)$ for some $p\in G$.
Then 
$$
D = \{ r : (\exists \sigma)\ r\Vdash \phi(\sigma) \}
$$
is dense below $p$. 
Thus there is some $q\in G\cap D$ and $\sigma$ with $q\Vdash \phi(\sigma)$.
By assumption, then $M[G]\models \phi(\sigma^{G})$. 
But then $M[G]\models(\exists x)\ \phi(x)$ so we are done.

