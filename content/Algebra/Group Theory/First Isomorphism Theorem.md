Let $G,H$ be [[Group]] with $\phi :G\to H$ a homomorphism.
Then the [[Kernel]] of $\phi$ is [[Normal]] and

$$
G/\ker\phi \cong \mathrm{Im} \phi
$$

#### Proof

Firstly, $e\in\ker\phi$, so nonempty.
Let $a,b\in\ker\phi$.
Then $\phi(ab^{-1})=\phi(a)\phi(b)^{-1}=e$ so $ab^{-1}\in\ker\phi$,
so $\ker\phi$ is a [[Subgroup]] of $G$.
Now note

$$
\phi(gag^{-1})=\phi(g)\phi(a)\phi(g^{-1})=\phi(gg^{-1})=e
$$

so $gag^{-1}\in\ker\phi$ for all $g\in G$.
Also $a\in\ker\phi$ so $\ker\phi\triangleleft G$.
Let $h:G/\ker\phi\to \mathrm{Im}\phi$, given by $h(g\ker\phi)=\phi(g)$.
Note $h$ is surjective homomorphism (need to check well defined).
Can also check $h$ injective, so $h$ is isomorphism - done.
