An isomorphism in a [[Foundations/Category Theory/Category]] $\mathcal{C}$ is a [[Foundations/Category Theory/Morphism]]
$$
f:A\to B
$$
such that there is a morphism (called the inverse)
$$
g:B\to A
$$
and both of the following hold:
$$
fg=1_{B}
$$
$$
gf=1_{A}
$$
### Lemma
Suppose $f:A\to B$ is an isomorphism with inverse $f^{-1}$.
The following hold for any $B\xrightarrow{g,h}A$
$$
fg=1_{B}\implies g=f^{-1}
$$
$$
hf=1_{A} \implies h=f^{-1}
$$
#### Proof
Suppose $fg=1_{B}$
Compose with $f^{-1}$ on the left:
$$
f^{-1}(fg)=f^{-1}1_{B}
$$
Use [[Foundations/Category Theory/Associativity]]
$$
(f^{-1}f)g=f^{-1}1_{B}
$$
By definition of $f^{-1}$, we have $f^{-1}f=1_{A}$
$$
1_{A}g=f^{-1}1_{B}
$$
By definition of identities:
$$
g=f^{-1}
$$
Now suppose $hf=1_{A}$
Note that in the [[Foundations/Category Theory/Opposite Category]] $\mathcal{C}^{op}$
$$
f\cdot_{op}h=hf=1_{A}
$$
(where $\cdot_{op}$ is composition in $\mathcal{C}^{op}$)
Thus, by previous case, we get $h=f^{-1}$
