Let $K$ be an [[Foundations/First Order Logic/Algebraically Closed Field]].
Suppose that the function $\Phi:K^{n}\to K^{n}$ is an injective [[Algebra/Polynomial Map]].
Then $\Phi$ is surjective.
### Proof
First suppose 
$$
K=\bigcup_{k} \mathbb{F}_{p^{k}}
$$
for some prime $p$.
Fix some $m$ such that all coefficients of $\Phi$ come from $\mathbb{F}_{p^{m}}$.
Then for any $k\geq 1$, $\Phi$ induces an injective polynomial map $\mathbb{F}_{p^{km}}^{n}\to \mathbb{F}_{p^{km}}^{n}$
which has to be surjective since $\mathbb{F}_{p^{km}}$ is finite.
Hence 
$$
\Phi(K) = \Phi\left( \bigcup_{k} \mathbb{F}_{p^{km}}^{n} \right) =\bigcup_{k} \Phi(\mathbb{F}_{p^{km}}^{n}) = \bigcup_{k} \mathbb{F}_{p^{km}}^{n} = K
$$
so $\Phi$ is surjective.

Now we consider $\mathrm{ACF}_{0}$.
First, for any $n,d\geq 1$ define $\psi_{n,d}$ to be:
> [!quot] %%%%
> Every injective polynomial map with $n$ coordinates, 
> each of which is a polynomial in $n$ variables and degree at most $d$,
> is surjective

Suppose that 
$$
\mathrm{ACF}_{0}\not\models \psi_{n,d}
$$
for some $n,d\geq 1$.
As $\mathrm{ACF}_{0}$ is a [[Foundations/First Order Logic/Complete Theory]] we have 
$$
\mathrm{ACF}_{0} \models \neg \psi_{n,d}
$$
By [[Foundations/First Order Logic/Compactness Theorem]], there is some finite $\Sigma \subseteq \mathrm{ACF}_{0}$ such that 
$$
\Sigma \models \neg \psi_{n,d}
$$
In particular, $\Sigma$ cannot encode infinite characteristic of its models,
and thus there is a prime $p$ such that 
$$
\mathrm{ACF}_{p} \models \neg \psi_{n,d}
$$
which is a contradiction.


