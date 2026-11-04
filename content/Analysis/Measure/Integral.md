Let $(A,\mathcal{A},\mu)$ be a [[Measure Space]]
Given a [[Simple Function]]:

$$
g=\sum_{k=1}^{m} a_{k}1_{A_{k}}
$$

we define the integral:

$$
\mu(g)=\sum_{k=1}^{m} a_{k}\mu(A_{k})
$$

For any nonnegative [[Measurable Function]] $f$
we define its integral as:

$$
\mu(f)=\sup \{ \mu(g):g \text{ simple, } g\leq f \}
$$

Finally, for any [[Measurable Function]] $f$ with $\mu(|f|)<\infty$,
we say that $f$ is integrable and we define the integral:

$$
\mu(f)=\mu(f^+)-\mu(f^-)
$$

where $f^+=f\land 0$ and $f^-=(-f)\land0$.

[[Monotone Convergence]]
[[Fatou's Lemma]]
[[Dominated Convergence]]
[[Differentiation under the integral]]
[[Fubini's Theorem]]
