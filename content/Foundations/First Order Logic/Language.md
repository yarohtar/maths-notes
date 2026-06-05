The language in [[Foundations/First Order Logic/First-order predicate Logic]]
is specified by a disjoint pair of sets:
$\Omega$ the set of operation symbols
$\Pi$ the set of predicate symbols
and an arity function 
$$
\alpha:\Omega \cup \Pi \to \mathbb{N}_{0}=\{ 0 \}\cup \mathbb{N}
$$

The language $\mathcal{L}=\mathcal{L}(\Omega,\Pi)$ consists of the following:
### Variables
This is a countably infinite set disjoint from $\Omega$ and $\Pi$
We denote variables by $x_{1},x_{2},\dots$ or $x,y,z\dots$
### Terms
Or $\Omega$-terms are defined inductively:
1. Every variable is a term
2. if $\omega \in \Omega$ with $n=\alpha(\omega)$ and $t_{1},t_{2},\dots,t_{n}$ are terms then $\omega t_{1}t_{2},\dots t_{n}$ is a term
### Atomic formulae
Two kinds:
1. If $s$, $t$ are terms then $(s=t)$ is an atomic formulae
2. if $\phi \in\Pi$ with $n=\alpha(\phi)$ and $t_{1},t_{2},\dots,t_{n}$ are terms then $\phi t_{1}t_{2}\dots t_{n}$ is an atomic formulae.
### Formulae
1. Atomic formulae are formulae
2. $\bot$ is a formula
3. If $p$, $q$ are formulae then so is $(p \implies q)$
4. If $p$ is a formula and $x$ is a [[Foundations/First Order Logic/Free Variable]] in $p$ then $(\forall x)p$ is a formula