# Домашнє завдання 6: Декоратор + Замісник

## 📦 Встановлення

```bash
npm install
🚀 Запуск
bash
Copy
Edit
npm run start
✅ Очікуваний результат
text
Copy
Edit
Тестуємо систему анти-спаму:
[2025-07-26 13:00:00] ПРИВІТ! ЯК СПРАВИ?
[RateLimit] skipped
[2025-07-26 13:00:01] ЦЕ ПОВІДОМЛЕННЯ ВЖЕ ПРОЙДЕ, БО МИ ПОЧЕКАЛИ 1 СЕКУНДУ
📁 Структура
IMessageService.ts — інтерфейс

MessageService.ts — основний сервіс

decorators.ts — декоратори: @withTimestamp, @uppercase

RateLimitProxy.ts — обгортка-проксі для обмеження частоти

main.ts — демонстрація роботи
```
