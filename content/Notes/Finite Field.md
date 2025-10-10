### Lemma
A finite field has order of a prime power.
Moreover, this is unique.
#### Proof
A finite field has prime [[Notes/Characteristic of a ring]] 
(otherwise, it wouldn't be an [[Notes/Integral domain]])

So say that our field has characteristic $p$ where $p$ is prime.
Then consider the field as the vector space of dimension $n$ over $\mathbb{F}_{p}$
This has size $p^{n}$.
### Corollary
[[Notes/A Freshman's Dream]] holds in any finite field.

### Lemma
For prime $p$:
$$
\mathbb{F}_{p^{n}}=\mathbb{F}_{p}[X] / (x^{p^{n}}-x)
$$

### Theorem
Any finite field can be represented as a quotient 
$$
K=\mathbb{F}_{p}[X] / (f)
$$
where $f$ is an irreducible polynomial of degree $n$ and $p$ is prime.
The field will have order $p^{n}$.
So we can identify $K\simeq \mathbb{F}_{p^{n}}\simeq \mathbb{F}_{p}^{n}$

### Lemma
For $q=p^{\alpha}$ for $\alpha\geq 1$, consider the unique field $\mathbb{F}_{q}$.
Then the multiplicative group $\mathbb{F}^{\times}_{q}$ is cyclic.
We say that $\beta$ is a primitive element if 
$$
\mathbb{F}_{q}^{\times}=\{ 1,\boldsymbol{\beta}\dots,\beta^{q-2} \}
$$
