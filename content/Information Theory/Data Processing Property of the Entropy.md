Let $X$ be a [[Probability/Random Variable]]
For any function $f$ on the alphabet of $X$:
$$
H(f(X) | X) =0 
$$
Additionally:
$$
H(f(X)) \leq H(X) 
$$
with equality if and only if $f$ is injective.
### Proof
$$
H(F(X)|X) = \sum_{x} P(x) \underbrace{H(f(X)|X=x)}_{=0} = 0
$$
Also by the [[Information Theory/Entropy Chain Rule]]:
$$
H(X) = H(X,f(X)) = H(f(X)) + H(X|f(X)) \geq H(f(X))
$$
with equality if and only if 
$$
H(X|f(X)) = 0
$$
i.e. $f$ is invertible.

