Suppose $\phi'(t)$ doesn't change sign on $[a,b]$ i.e. $\phi$ is monotonic.
Then:
$$
\int_{a}^{b} f(t) e^{ix\phi(t)}dt \sim \frac{1}{ix} \left( \frac{f(b)}{\phi'(b)} e^{ix\phi(b)} - \frac{f(a)}{\phi'(a)}e^{ix\phi(a)} \right)
$$
### Proof
$\phi$ is a bijection -> use substitute $u=\phi(t)$.
The inverse function rule gives:
$$
dt = \frac{du}{\phi'(\phi ^{-1}(u))}
$$
Then integrate by parts.
