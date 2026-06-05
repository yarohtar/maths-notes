Consider [[Algebra/Formal Power Series]] over a [[Algebra/Ring Theory/Ring\|Ring]] $R$ for $n\geq 0$:
$$
A_{n}(x) = a_{n 0}+ a_{n 1}x + a_{n 2} x^{2} + \dots
$$
Suppose $\deg A_{n}\to \infty$ as $n\to \infty$.
Then we define 
$$
P(x) = \prod_{n=0}^{\infty} (1+A_{n}(x)) = 1 + \sum_{k=1}^{\infty} \sum_{0\leq n_{1}<n_{2}<\dots<n_{k}} \prod_{j=1}^{k} A_{n_{j}}
$$
where [[Algebra/Formal Infinite Sum]]s do converge by assumption.

