Suppose $f:\mathbb{N}^{k}\dashrightarrow \mathbb{N}$, $g:\mathbb{N}^{k+2}\dashrightarrow \mathbb{N}$ and $g_{1},\dots,g_{k}:\mathbb{N}^{l}\dashrightarrow \mathbb{N}$ are [[XNotes/Partial Numerical Function]]s.

The partial numerical function $c$ defined by
$$
c(\vec{n})=f(g_{1}(\vec{n}),\dots,g_{k}(\vec{n}))
$$
is called the composition of $f$ with $(g_{1},\dots,g_{k})$

The partial numerical function $r$ defined by
$$
r(\vec{n},0)=f(\vec{n})
$$
$$
r(\vec{n},m+1)=g(\vec{n},m,r(\vec{n},m))
$$
is called the recursion of $f$ and $g$

### Definition
The class of primitive recursive functions is 
the smallest class of partial functions containing all [[Foundations/Basic Functions]] 
that is closed under composition and recursion.

### Theorem
Every primitive recursive function is [[Foundations/Computable]].