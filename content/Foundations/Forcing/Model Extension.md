Let $M$ be a [[Foundations/Transitive Model]].
Let $(\mathbb{P},\leq,\mathbb{1})$ be a [[Foundations/Forcing/Forcing Partial Order]].
Let $F\subseteq \mathbb{P}$.
Then the model extension of $M$ by $F$ is 
$$
M[F] = \{ \mathrm{val}(\tau,F) : \tau \in \mathrm{Name}^{\mathbb{P}}\cap M \}
$$
where $\mathrm{Name}^{\mathbb{P}}$ are the $\mathbb{P}$-[[Foundations/Forcing/Name]]s.
## Theorem
Let $M$ be a (countable) [[Foundations/Transitive Model]] of $ZF(C)$
Let $(\mathbb{P},\leq,\mathbb{1})$ be a [[Foundations/Forcing/Forcing Partial Order]].
Let $F$ be a $\mathbb{P}$-[[Foundations/Forcing/Generic Filter]] over $M$ with $\mathbb{1}\in F$.
Then $M[F]$ is a (countable) [[Foundations/Transitive Model]] of $ZF(C)$ 
and furthermore, $M\subseteq M[F]$ and $F\in M[F]$.
#### Note
The above statement can be modified to conclude the following:
If $T\subseteq ZFC$ is finite, then there is some finite $T^{*}\subseteq ZFC$
such that if $M$ is a countable [[Foundations/Transitive Model]] of $T^{*}$
Then $M[F]$ is a countable [[Foundations/Transitive Model]] of $T$
and furthermore, $M\subseteq M[F]$ and $F\in M[F]$.
### Proof
Firstly, if $M$ is countable, then so is $\mathrm{Name}^{\mathbb{P}}\cap M$.
But $M[F]\subseteq \mathrm{Name}^{\mathbb{P}}\cap M$ so it is also countable.

By definition, it is also a [[Foundations/Set Theory/Transitive\|Transitive]] set.
Secondly, we know that $M\subseteq M[F]$ and $F\in M[F]$ from [[Foundations/Forcing/Canonical Name]]s.

Any [[Foundations/Transitive Model]] satisfies [[Foundations/Set Theory/Axiom of Extensionality]] and [[Foundations/Set Theory/Axiom of Foundation]].
Furthermore, as $\omega \in M\subseteq M[F]$, then $M[F]$ satisfies [[Foundations/Set Theory/Axiom of Infinity]].
#### Pair
[[Foundations/Set Theory/Pair-set axiom]]
Given $\sigma,\tau \in \mathrm{Name}^{\mathbb{P}}\cap M$, we need a [[Foundations/Forcing/Name]] for 
$$
\{ \mathrm{val}(\sigma,F), \mathrm{val}(\tau,F) \} = \pi
$$
Set 
$$
\mathrm{up}(\sigma,\tau) = \{ (\sigma,\mathbb{1}), (\tau,\mathbb{1}) \}
$$
as the obvious name for the pair.
Then clearly: 
$$
\mathrm{val}(\mathrm{up}(\sigma,\tau), F) = \pi
$$
because $\mathbb{1}\in F$.
#### Union
[[Foundations/Set Theory/Union axiom]]
Given $\sigma \in \mathrm{Name}^{\mathbb{P}}$ need a [[Foundations/Forcing/Name]] for 
$$
\bigcup \mathrm{val}(\sigma,F)
$$
Define 
$$
u_{\sigma} = \Big\{ (\sigma',r) : (\exists \tau,p,q)\, (\tau,p)\in \sigma \land(\sigma',q)\in \tau \land r\leq p,q \Big\}
$$
As $F$ is a [[Foundations/Poset/Filter]], we can check that:
$$
\mathrm{val}(u_{\sigma},F) = \bigcup \mathrm{val} (\sigma,F)
$$
#### Separation
[[Foundations/Set Theory/Axiom of Separation]]
Let $x=\mathrm{val}(\sigma,F)$ for some $\sigma \in \mathrm{Name}^{\mathbb{P}}\cap M$.
Let $\phi$ be a formula with one free variable (we omit the parameters for readability)
Want to find a [[Foundations/Forcing/Name]] for
$$
A_{\phi} = \{  z\in x : M[F] \models \phi(x) \}
$$
Set 
$$
\tau_{\phi} = \{ (\tau',p) : (\exists q)\, (\tau',q)\in \sigma \land p\leq q \land p\Vdash \phi(\tau') \}
$$
where $\Vdash$ is the [[Foundations/Forcing/Forcing Relation]] given by [[Foundations/Forcing/The Forcing Theorem]].
Then we claim that 
$$
\mathrm{val}(\tau_{\phi}, F) = A_{\phi}
$$
##### $\supseteq$
Suppose $z=\mathrm{val}(\tau,F)$.
$$
\begin{align}
z\in A_{\phi}  & \implies z\in x\land M[F] \models \phi(z) \\
 & \implies \mathrm{val}(\tau,F) \in \mathrm{val}(\sigma,F) \land M[F] \models \phi(z) \\
 & \implies (\exists q\in F)\, (\tau,q) \in \sigma \land (\exists p\in F)\, p \Vdash \phi(\tau)
\end{align}
$$
Take such $q,p\in F$.
As $F$ is a [[Foundations/Poset/Filter Base]] there is some $r\in F$ such that $r\leq p,q$.
From $r\leq p\land p\Vdash\phi(\tau)$ we conclude $r\Vdash\phi(\tau)$.
Now we can write 
$$
r\leq q \land (\tau,q)\in \sigma \land r\Vdash\phi(\tau)
$$
Thus $(\tau,r)\in \tau_{\phi}$ by definition.
Also $r\in F$, so by definition of value of a [[Foundations/Forcing/Name]], we have 
$$
\mathrm{val}(\tau,F) \in \mathrm{val}(\tau_{\phi},F)
$$
which completes this direction.
##### $\subseteq$
Suppose $z=\mathrm{val}(\tau,F)$
$$
\begin{align}
z\in \mathrm{val}(\tau_{\phi},F) &  \implies (\exists p\in F)\, (\tau,p) \in \tau_{\phi}  \\
 & \implies (\exists p\in F)\,(\exists q)\, \underbrace{p\leq q}_{\text{so }q\in F} \land (\tau,q)\in \sigma \land p\Vdash \phi(\tau) \\
 & \implies \mathrm{val}(\tau,F) \in \mathrm{val}(\sigma,F) \land M[F] \models \phi(z) \\
 & \implies z\in A_{\phi}
\end{align}
$$
#### Powerset
[[Foundations/Set Theory/Powerset Axiom]]
Fix $x=\mathrm{val}(\sigma,F)$.
Using $\mathrm{dom}(\sigma)=\{ \tau: (\exists p)\, (\tau,p)\in \sigma \}$ define:
$$
\pi = \{ (\tau,\mathbb{1}) : \mathrm{dom}(\tau) \subseteq \mathrm{dom}(\sigma) \}
$$
We claim the following: 
$$
y\in M[F] \land y\subseteq x \implies y\in \mathrm{val}(\pi,F)
$$
As we already have [[Foundations/Set Theory/Axiom of Separation]] in $M[F]$, 
we can then separate the powerset from $\mathrm{val}(\pi,F)$
##### Proof of claim
Let $y\subseteq x$ and $y=\mathrm{val}(\mu,F)$.
Set 
$$
\mu ^{*} = \{ (\tau,p) : \tau \in \mathrm{dom}(\sigma) \land p \Vdash \tau \in \mu \}
$$
Then one can show (Example sheet 3) that 
$$
\mathrm{val}(\mu,F) = \mathrm{val}(\mu ^{*},F)
$$
Also clearly $(\mu ^{*},\mathbb{1})\in \pi$ so we are done.
#### Replacement
[[Foundations/Set Theory/Axiom of Replacement]]
Let $x=\mathrm{val}(\sigma,F)$ and $\phi$ be a [[Foundations/Set Theory/Function Class]] (in $M[F]$).
By [[Foundations/Set Theory/Axiom of Separation]] it is enough to show that there is some $R\in M[F]$ such that 
$$
M[F] \models (\forall y\in x)\, (\exists z\in R)\, \phi(y,z)
$$
(where we omit the parameters for clarity)
In $M$, find $\alpha \in \mathrm{Or d}$ such that $\mathrm{dom}(\sigma)\subseteq V_{\alpha}$ and write $\psi(p,\pi)$ for
$$
(\exists \mu)\, p \Vdash \phi(\pi,\mu)
$$
(by [[Foundations/Forcing/The Forcing Theorem]], this is well defined)
Again in $M$, use [[Foundations/Lévy Reflection Theorem]] to find $\nu>\alpha$ 
such that $\psi$ is [[Foundations/Absolute]] between $V_{\nu}$ and $M$.
Define 
$$
\rho=\{ (\mu,\mathbb{1}) : \mu \in V_{\nu} \}
$$
and set $R=\mathrm{val}(\rho,F)$.
We now check the above.
Let $y=\mathrm{val}(\pi,G)\in x$
Let $z=\mathrm{val}(\mu,F)$ such that $M[F]\models \phi(y,z)$.
By [[Foundations/Forcing/Forcing Relation]] find $p\in F$ such that 
$$
M\models p \Vdash \phi(\pi,\mu)
$$
It follows that
$$
M\models \psi(p,\pi)
$$
By [[Foundations/Absolute]]ness we have 
$$
V_{\nu} \models \psi(p,\pi)
$$
so there is some $\mu ^{*}\in V_{\nu}$ such that 
$$
p\Vdash \phi(\pi,\mu ^{*})
$$
from where it follows that 
$$
M[F]\models \phi(y, \mathrm{val}(\mu ^{*},F))
$$
But $\phi$ is a [[Foundations/Set Theory/Function Class]] so certainly 
$$
\mathrm{val}(\mu,F) = \mathrm{val}(\mu ^{*},F)
$$
Thus we conclude $(\mu ^{*},\mathbb{1})\in \rho$ so $\mathrm{val}(\mu,F)\in R$.
#### Choice
Suppose [[Foundations/Set Theory/Axiom of Choice]] holds in $M$.
Suppose 
$$
\mathrm{val}(\sigma,F) \subseteq \{ \mathrm{val}(\tau,G) : \tau \in \mathrm{dom}(\sigma) \}
$$
By [[Foundations/Set Theory/Axiom of Choice]] in $M$, find an injection 
$$
\mathrm{dom}(\sigma) \to \alpha \in \mathrm{Or d}
$$
so $\mathrm{val}(\sigma,F)$ is [[Foundations/Ordinals/Well-ordered]].

