Suppose that $\mathbb{N}^{(r)}$ is $2$-coloured. 
Then there exists an infinite monochromatic set.
### Proof
We prove this by induction on $r$.
The case $r=1$ is trivial. 
Assume the statement for $r$ and let $c:\mathbb{N}^{(r+1)}\to 2$ be a colouring.
Construct the sequences $a_{n}\in B_{n}\subseteq \mathbb{N}$ for all $n\in \mathbb{N}$.
Let $B_{0}=\mathbb{N}$ and $a_{0}\in B_{0}$. 
Consider the colouring $c':(B_{n}\setminus \{ a_{n} \})^{(r)}\to 2$ 
given by 
$$
c'(F)=c(F\cup \{ a_{n} \})
$$
Let $B_{n+1}$ be an infinite monochromatic subset of $B_{n}\setminus \{ a_{n} \}$ under $c'$
(given by the induction hypothesis)
Thus we have a sequence of distinct $a_{0},a_{1},\dots$
and some colours $c_{0},c_{1},\dots \in 2$ such that 
$$
c(\{a_{i_{0}},a_{i_{1}},\dots,a_{i_{r}}\}) = c_{i_{0}}
$$
whenever $i_{0}<i_{1},\dots,i_{r}$.
But infinitely many of $c_{0},c_{1},\dots$ will be the same,
so choose this subsequence for the infinite monochromatic set.

