A function $f:U\to W$ is conformal iff $f$ is analytic with $f'(z)\neq 0$ on $U$. If $f$ is bijective, it is a conformal equivalence.

Conformal maps preserve angles.
Let $z_1(t)$ be a curve, with $z_0=z_1(0)$. The angle of the curve with $x$ direction is $\arg z_1'(0)$. Let $f$ be a conformal map and let $\zeta_1(t)=f(z_1(t))$ be a new curve. The angle is now:
$\arg \zeta_1'(0)=\arg f'(z_0)z_1'(t)=\arg z_1'(t) + \arg f'(z_0)$
Note that $\arg f'(z_0)$ is well defined because $f'(z_0)\neq 0$.
Now if we introduce a second curve $z_2(t)$, then we see it also gets rotated by $\arg f'(z_0)$ and hence the angle between $z_1$ and $z_2$ is preserved.

The reverse is also true!

### Examples
- $e^z$ maps rectangles to sectors of annuli
- $\log z$ maps sectors of annuli to rectangles
- $\log z$ will also map the upper half plane to the strip $0<y<\pi$ (or whatever the branch of $\log$ is)
- [[Mobius map]] $f(z)={z-1\over z+1}$ swaps the imaginary axis and the unit circle, while keeping the real line fixed (useful.)

### Riemann Mapping Theorem
Any simply connected domain that is not the whole $\mathbb C$ is conformally equivalent to the unit disk.