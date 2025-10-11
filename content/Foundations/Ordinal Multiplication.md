We'll give two definitions, starting with the inductive:
### Definition (inductive)
We define $\alpha \cdot \beta$ by recursion on $\beta$ (with $\alpha$ fixed):
1. $\alpha \cdot 0=0$
2. $\alpha \cdot \beta^{+}=\alpha \cdot \beta+\alpha$
3. $\alpha \cdot \lambda=sup \{ \alpha \cdot \gamma:\gamma<\lambda \}$ where $\lambda\neq 0$ is a limit

### Definition (synthetic)
We define $\alpha \cdot \beta$ to be the [[Foundations/Order Type]] of $\alpha \times \beta$ ([[Foundations/Cartesian Product of Well Ordered Sets]])

### Properties
- $(\alpha \cdot \beta)\cdot \gamma=\alpha \cdot(\beta \cdot \gamma)$
- $\beta\leq \gamma \implies \alpha \cdot \beta\leq \alpha \cdot \gamma$
- $\beta<\gamma \implies \alpha \cdot \beta<\alpha \cdot \gamma$ provided $\alpha>0$
- $\beta\leq \gamma \implies \beta \cdot \alpha\leq \gamma \cdot \alpha$
