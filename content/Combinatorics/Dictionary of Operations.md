### Theorem
Let $\mathcal{A}$ and $\mathcal{B}$ be [[Combinatorics/Combinatorial Structure]]s
with [[Algebra/Ordinary Generating Function]]s $f_{\mathcal{A}}$ and $f_{\mathcal{B}}$
Then the following holds
$$
f_{\mathcal{A}+\mathcal{B}}(x) = f_{\mathcal{A}}(x) + f_{\mathcal{B}}(x)
$$
$$
f_{\mathcal{A}\times \mathcal{B}} = f_{\mathcal{A}}(x)\cdot f_{\mathcal{B}} (x)
$$
$$
f_{\mathcal{A}^{*}}(x) = 1 + f_{\mathcal{A}} + f_{\mathcal{A}}^{2} + \dots = \frac{1}{1-f_{\mathcal{A}}(x)}
$$
$$
f_{\mathcal{B}(\mathcal{A})}(x) = f_{\mathcal{B}}(f_{\mathcal{A}}(x))
$$
### Theorem
Let $\mathcal{A}$ and $\mathcal{B}$ be [[Combinatorics/Combinatorial Structure]]s 
with [[Combinatorics/Exponential Generating Function]]s $\tilde{f}_{\mathcal{A}}$ and $\tilde{f}_{\mathcal{B}}$
Then the following holds:
$$
\tilde{f}_{\mathcal{A}+\mathcal{B}} = \tilde{f}_{\mathcal{A}}(x) + \tilde{f}_{\mathcal{B}}(x)
$$
$$
\tilde{f}_{\mathcal{A}*\mathcal{B}}(x) = \tilde{f}_{\mathcal{A}}(x)\cdot \tilde{f}_{\mathcal{B}}(x)
$$
$$
\tilde{f}_{\mathrm{Seq}(\mathcal{A})}(x) = 1 + \tilde{f}_{\mathcal{A}} + \frac{\tilde{f}_{\mathcal{A}}^{2}}{2!} + \dots = \exp(\tilde{f}_{\mathcal{A}}(x))
$$
$$
\tilde{f}_{\mathcal{B}\circ \mathcal{A}}(x) = \tilde{f}_{\mathcal{B}} (\tilde{f}_{\mathcal{A}}(x))
$$
$$
\tilde{f}_{\mathcal{A}^{+}}(x) = \tilde{f}_{\mathcal{A}}'(x)
$$
$$
\tilde{f}_{\mathcal{A}_{\bullet}}(x) = x f_{\mathcal{A}}'(x)
$$
