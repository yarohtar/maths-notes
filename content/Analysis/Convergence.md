## Real sequences
### Definition
Let $(x_n)$ be a real sequence and $x\in \mathbb{R}$. We say that $x_n$ converges to $x$ as $n$ goes to $\infty$ if:
$$\forall \epsilon>0\ \exists M\in N\ \forall n>N\ |x_n-x|<\epsilon$$

## $\mathbb{R}^n$ sequences
### Definition
Let $x_n\in \mathbb{R}^m$ be a sequence. Denote by $||x||$ the Euclidean modulus of $x$. Then $x_n$ converges to $x\in \mathbb{R}^m$ as $n\rightarrow\infty$ if:
$$\forall\epsilon>0\ \exists M\in N\ \forall n>N\ ||x_n-x||<\epsilon$$

Note that this is equivalent to saying that $||x_n-x||$ converges to 0 (as a real sequence). 

We can also prove that each component of $x_n$ converges to the corresponding component of $x$. Hence, a lot of results from Real sequences will be easily generalized to $\mathbb{R}^n$ sequences.

[[Analysis/Triangle inequality]]

[[Analysis/Boltzano-Weierstrass theorem]]

[[Analysis/Cauchy's Theorem]]
